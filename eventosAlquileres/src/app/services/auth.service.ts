import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

import { User } from '../models/user'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: String = "http://localhost:3000";

  constructor(private http: HttpClient, private router: Router) { }

  singUp(user: User) {
    return this.http.post<User>(this.url + '/singup', user)
  }

  singIn(user: User) {
    return this.http.post<User>(this.url + '/singin', user)
  }

  loggedIn() {

    return localStorage.getItem('token')
  }
  getToken() {
    return localStorage.getItem('token')
  }
  logOut() {
    localStorage.removeItem('token')
    this.router.navigate(['/singIn'])
  }
}