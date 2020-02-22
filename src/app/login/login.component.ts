import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LogindataService } from './logindata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginform:FormGroup;
hide = true;
  constructor(private _data:LogindataService,private _routes:Router) { }

  ngOnInit() {
    this.loginform=new FormGroup({
      fname:new FormControl("zain",[Validators.required]),
      password:new FormControl("nancy",[Validators.required])
    });
  }
  OnLogin()
  {
    this._data.login(this.loginform.value).subscribe(
      (data:user[])=>{
        console.log(this.loginform.value);
        console.log(data);
        if(data.length==1)
        {
          console.log(data[0].img);
          localStorage.setItem('fname',data[0].fname);
          localStorage.setItem('user_id',data[0].user_id.toString());
          console.log(localStorage.getItem('user_id'));

          localStorage.setItem('img',data[0].img);
          localStorage.setItem('password',data[0].password);
          this._routes.navigate(['/nav']);
        }
        else{
          alert("Login UnSuccessfull");
        }
      }
    );
  }
}
