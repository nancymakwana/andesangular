import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: "root"
})
export class CategorydataService {
  private url: string = environment.url+"category/";
  constructor(public _http: HttpClient) {}
  getAllCategory() {
    return this._http.get(this.url);
  }

  deleteCategory(cat_id: number) {
    let header = new HttpHeaders().set("Content-Type", "application/json");
    console.log(cat_id);
    return this._http.delete(this.url + cat_id, { headers: header });
  }
  addCategory(item) {
   // console.log(item.get("cat_name"));
   let body = JSON.stringify(item);
   let header = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.post(this.url, body,{headers:header});
  }
  getCategoryById(cat_id: number) {
    let header = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.get(this.url + cat_id, { headers: header });
  }

  UpdateCategory(cat_id,item) {
     //let body = JSON.stringify(item);
    let header = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.put(this.url + cat_id, item,{headers:header});
  }
}
