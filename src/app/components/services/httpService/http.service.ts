import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseurl='http://localhost:3000/';
  constructor(private httpclient : HttpClient) { }

  postServices(url:string,reqdata:any){
    return this.httpclient.post(this.baseurl+url,reqdata)

  }
  getServices(url:string)
  {return this.httpclient.get(this.baseurl+url)
  
  }
}
