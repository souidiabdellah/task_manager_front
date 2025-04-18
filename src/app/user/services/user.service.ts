import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) { }

  //Register new User
  registerUser(userData: Partial<User>):Observable<User> 
  {
    return this.http.post<User>(this.apiUrl,userData);
  }

  //Update User
  updateUser(id:number, userData: Partial<User>):Observable<User>
  {
    return this.http.put<User>(`${this.apiUrl}/${id}`, userData);
  }
}
