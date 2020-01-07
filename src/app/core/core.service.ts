import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  private url='http://localhost:8765/';
  constructor(private http:HttpClient) { }


  //Valuation Service
  postValuationData(data:any){
  this.http.post(this.url+'mortgage-service/api/valuation',data).subscribe(data =>{console.log(data)});
  }

  public registerData(data:any){
    this.http.post(this.url+'user-registration-service/users/register',data);
    }

}
