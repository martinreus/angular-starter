import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Server } from './model';

@Injectable({
  providedIn: 'root'
})
export class ServersService {
  constructor(private httpClient: HttpClient) {}

  getList(): Observable<Server[]> {
    return this.httpClient.get('servers') as Observable<Server[]>;
  }
}
