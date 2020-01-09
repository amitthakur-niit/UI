import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Register } from './auth/register/register';
import { Question } from './auth/forgot-pasword/question';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private url = 'http://localhost:8765/';
  constructor(private http: HttpClient) { }


  //Valuation Service
  postValuationData(data: any) {
    return this.http.post(this.url + 'mortgage-service/api/valuation', data).subscribe(data => { console.log(data) });
  }

  //user-registration service
  registerData (requestBody: Register): Observable<Register> {
  //registerData(data: Register) : Observable < Register > {
    return this.http.post<Register>(this.url + 'user-registration-service/users/register', requestBody)
  }

  forgotPaswd(requestBody:Question):Observable<any>{

    return this.http.post<any>(this.url + 'user-registration-service/users/forgetPassword', requestBody)
  }
}
