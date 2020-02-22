import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: "root"
})
export class DeliverymandataService {
  private url: string = environment.url+"deliveryman/";
  constructor(public _http: HttpClient) {}
  getAllDeliveryman() {
    return this._http.get(this.url);
  }

  deleteDeliveryman(id: number) {
    let header = new HttpHeaders().set("Content-Type", "application/json");

    return this._http.delete(this.url + id, { headers: header });
  }
  addDeliveryman(item: FormData) {
    return this._http.post(this.url, item);
  }
  getDeliverymanById(user_id: number) {
    let header = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.get(this.url + user_id, { headers: header });
  }

  Updatedeliveryman(item: FormData, user_id: number) {
    /*let body = JSON.stringify(item);
    let header = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.put(this.url + item.user_id, body, { headers: header });*/

    return this._http.put(this.url + user_id, item);
  }
}
