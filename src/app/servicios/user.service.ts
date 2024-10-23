import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly API_URL = 'https://jsonplaceholder.typicode.com/users';
  users: any[];
  constructor(private http: HttpClient) {
    this.users = [];
  }

  //petición GET
  getUsers() {

    //devuelve un observable
    return this.http.get<any[]>(this.API_URL);
  }

  getUser(id: number) {
    return this.http.get<any>(`${this.API_URL}/${id}`);
  }
  //petición POST
  postUser(user: any) {
    return this.http.post<any>(this.API_URL, user);
  }
  //petición DELETE
  deleteUser(id: number) {
    return this.http.delete<any>(`${this.API_URL}/${id}`);
  }
}