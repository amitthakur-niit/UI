import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from './auth/register/register';

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

  registerData (requestBody: Register): Observable<any> {
    return this.http.post<any>(this.url + 'user-registration-service/users/register', requestBody)
  }
}
