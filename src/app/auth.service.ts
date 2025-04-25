import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _isLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    this._isLoggedIn.next(this.hasValidToken());
  }

  login(email: string, password: string) {
    return this.http.post<{ token: string }>('api/login', { email, password }).pipe(
      tap(response => {
        this.storeToken(response.token);
        this._isLoggedIn.next(true);
      })
    );
  }

  logout() {
    localStorage.removeItem('auth_token');
    this._isLoggedIn.next(false);
    this.router.navigate(['/login']);
  }

  getToken() {
    return localStorage.getItem('auth_token');
  }

  private storeToken(token: string) {
    localStorage.setItem('auth_token', token);
  }

  private hasValidToken(): boolean {
    const token = this.getToken();
    if (!token) return false;

    try {
      const decoded: any = jwtDecode(token);
      return decoded.exp > Date.now() / 1000;
    } catch {
      return false;
    }
  }
  isLoggedIn(): boolean {
    return this._isLoggedIn.value;}
}