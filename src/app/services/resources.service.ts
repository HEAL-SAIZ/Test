import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';
import { IResourcesResponse } from '../models/responses/resources-responses';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl
  }

  getResources(): Observable<IResourcesResponse> {
    return this.http.get<IResourcesResponse>(`${this.apiUrl}unknown`);
  }
}
