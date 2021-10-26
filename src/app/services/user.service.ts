import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators'
import { User } from '../models/model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = "http://localhost:8080/UserApi/Users";

  
  constructor(private http :HttpClient) {
   }

    public getUserList() : Observable<User[]> {
      console.log('I point into the user service');
      return this.http.get<User[]>(this.usersUrl);
    }

   public getUser(id: number): Observable<User> {
    return this.http.get<User>(this.usersUrl+`/user/${id}`).pipe(
      catchError(() => throwError('User not found'))
    );
    }
  }
