import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeliverydataService {

  url:string=environment.url+"delivery/";
    constructor(public _http:HttpClient) { }
    getAllOrder()
    {
      return this._http.get(this.url);
    }
    getDeliveryById(order_delivery_id:number)
    {
      let header = new HttpHeaders().set("Content-Type", "application/json");
      return this._http.get(this.url+order_delivery_id,{headers:header});
    }
    AddDelivery(item)
    {
      let body=JSON.stringify(item);
      let header = new HttpHeaders().set("Content-Type", "application/json");
      return this._http.post(this.url,{headers:header});
    }

}
