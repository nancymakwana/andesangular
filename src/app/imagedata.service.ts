import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { product } from './productdisplay/product';

@Injectable({
  providedIn: "root"
})
export class ImagedataService {
  private url: string = environment.url + "img/";
  private header = new HttpHeaders().set(environment.header, environment.value);
  constructor(public _http: HttpClient) {}
  addImage(fd: FormData, pro_id: number) {
    // console.log(obj);
    // const body = JSON.stringify(obj);
    return this._http.post(this.url + pro_id, fd);
  }

  getImageById(pro_id: number) {
    return this._http.get<product[]>(this.url + pro_id, {
      headers: this.header
    });
  }

  getAllImage(pro_id: number) {
    return this._http.get(this.url + pro_id, {
      headers: this.header
    });
  }

  UpdateImage(pro_img_id: number,fd:FormData) {
    console.log(pro_img_id)
    return this._http.put(this.url + pro_img_id, fd);

    //return this._http.put(this.url+item.user_id,item);
  }
  deleteImage(id: number) {
    let header = new HttpHeaders().set("Content-Type", "application/json");
    console.log(id);
    return this._http.delete(this.url + id, { headers: header });
  }
}
