import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ServersService } from '../servers.service';
import { Observable, merge, of } from 'rxjs';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';
import { Server } from '../model';
import { MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.scss']
})
export class ServerListComponent implements AfterViewInit {
  serverList$: Observable<Server[]>;
  displayedColumns: string[] = ['nome', 'ip'];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private serverService: ServersService) {}

  ngAfterViewInit() {
    this.serverList$ = this.serverService.getList();
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    this.serverList$ = merge(this.sort.sortChange, this.paginator.page).pipe(
      startWith({}),
      switchMap(() => {
        console.log('started fetch');
        this.isLoadingResults = true;
        return this.serverService.getList();
      }),
      map(data => {
        console.log('loaded data', data);
        // Flip flag to show that loading has finished.
        this.isLoadingResults = false;
        this.isRateLimitReached = false;
        this.resultsLength = data.length;

        return data;
      }),
      catchError(() => {
        this.isLoadingResults = false;
        // Catch if the GitHub API has reached its rate limit. Return empty data.
        this.isRateLimitReached = true;
        console.log('error!!!');
        return of([]);
      })
    );
  }
}
