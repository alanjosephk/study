import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  public getToken(): string {
    return localStorage.getItem('token');
  }

  public isAuthenticated() {
    return true;
  }
 }
