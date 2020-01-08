import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LogIn } from './auth/login/logIn';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LogInService {
public isLoggedIn = false;
  private url = 'http://localhost:8765/';
  constructor(private http: HttpClient) { }



  //user-logIn service
  logInData (requestBody: LogIn): Observable<BigInteger> {
    console.log("Login check");
    return this.http.post<BigInteger>(this.url + 'user-registration-service/users/logIn', requestBody)
  }
}
