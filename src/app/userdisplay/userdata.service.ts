import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: "root"
})
export class UserdataService {
  private url: string = environment.url+"customer/";
  constructor(public _http: HttpClient) {}
  getAllUser() {
    return this._http.get(this.url);
  }

  deleteUser(id: number) {
    let header = new HttpHeaders().set("Content-Type", "application/json");
    console.log(id);
    return this._http.delete(this.url + id, { headers: header });
  }
  addUser(item: FormData) {
    return this._http.post(this.url, item);
  }
  getUserById(user_id: number) {
    let header = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.get(this.url + user_id, { headers: header });
  }

  UpdateUser(item: FormData, user_id: number) {
    //  let body = JSON.stringify(item);
    // let header = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.put(this.url + user_id, item);

    //return this._http.put(this.url+item.user_id,item);
  }
}
