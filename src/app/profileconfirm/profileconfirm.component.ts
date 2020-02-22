import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { user1 } from '../usermenu/user1';

@Component({
  selector: 'app-profileconfirm',
  templateUrl: './profileconfirm.component.html',
  styleUrls: ['./profileconfirm.component.css']
})
export class ProfileconfirmComponent implements OnInit {

  hide = true;
  constructor(private _route:Router,private dialogRef:MatDialogRef<ProfileconfirmComponent>,@Inject(MAT_DIALOG_DATA) public data:user1) { }

  ngOnInit() {
   }
  OnOkClick(password)
  {
    if(password==localStorage.getItem('password'))
    {
      this.dialogRef.close();
      this._route.navigate([localStorage.getItem('link'),localStorage.getItem('user_id')]);
    }
  }
  OnCancelClick()
  {
    this.dialogRef.close();
  }


}
