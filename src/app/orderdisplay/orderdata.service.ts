import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { delivery } from '../orderdelivery/delivery';

@Injectable({
  providedIn: 'root'
})
export class OrderdataService {
url:string=environment.url+"order/";
delivery:string=environment.url+"delivery/";
deliveryviewmore:string=environment.url+"deliveryviewmore/";
  constructor(public _http:HttpClient) { }
  getAllOrder()
  {
    return this._http.get(this.url);
  }
  getAllAssignOrder()
  {
    return this._http.get(this.deliveryviewmore);
  }
  getOrderById(order_id:number)
  {
    let header = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.get(this.url+order_id,{headers:header});
  }
  AddDelivery(fk_order_id:number,item)
  {
    const body = JSON.stringify(item);
    let header = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.post(this.delivery+fk_order_id,body,{headers:header});
  }
  getDeliveryId(fk_order_id:number)
  {
    let header = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.get(this.deliveryviewmore+fk_order_id,{headers:header});
  }

}
