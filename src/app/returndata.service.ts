import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReturndataService {

  url:string=environment.url+"returnorder/";
    constructor(public _http:HttpClient) { }
    getAllReturnOrder()
    {
      return this._http.get(this.url);
    }
    getReturnOrderById(order_return_id:number)
    {
      let header = new HttpHeaders().set("Content-Type", "application/json");
      return this._http.get(this.url+order_return_id,{headers:header});
    }
    // AddDelivery(item)
    // {
    //   let body=JSON.stringify(item);
    //   let header = new HttpHeaders().set("Content-Type", "application/json");
    //   return this._http.post(this.url,{headers:header});
    // }

}
