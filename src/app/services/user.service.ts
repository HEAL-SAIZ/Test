import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';
import { IUserByIdResponse, IUsersResponse } from '../models/responses/user-responses';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  getUsers(): Observable<IUsersResponse> {
    return this.http.get<IUsersResponse>(`${this.apiUrl}users?page=2`);
  }

  getUserById(id: number): Observable<IUserByIdResponse> {
    return this.http.get<IUserByIdResponse>(`${this.apiUrl}users/${id}`);
  }

  updateUser(id: number, userData: IUser): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}users/${id}`, userData);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}users/${id}`);
  }
}
