import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { product } from './product';

@Injectable({
  providedIn: "root"
})
export class ProductdataService {
  private url: string = environment.url + "product/";
  private _imgurl: string = environment.url + "img/";
  private header = new HttpHeaders().set(environment.header, environment.value);
  constructor(public _http: HttpClient) {}
  getAllProduct() {
    return this._http.get<product[]>(this.url);
  }
  deleteProduct(id: number) {
    console.log(id);
    return this._http.delete(this.url + id, { headers: this.header });
  }
  addProduct(obj) {
    const body = JSON.stringify(obj);
    return this._http.post(this.url, body, { headers: this.header });
  }
  getProductById(pro_id: number) {
    return this._http.get<product[]>(this.url + pro_id, {
      headers: this.header
    });
  }

  UpdateProduct(item: product, pro_id: number) {
    console.log(item);
    let body = JSON.stringify(item);
    return this._http.put(this.url + pro_id, body, { headers: this.header });

    //return this._http.put(this.url+item.user_id,item);
  }
}
