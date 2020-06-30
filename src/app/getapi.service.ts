import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetapiService {

  constructor(
    private http:HttpClient
  ) { }
  apiCall()
  {
    return this.http.get("https://pipl.ir/v1/getPerson"
     )
  }
}
