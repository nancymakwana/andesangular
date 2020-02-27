import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { user1 } from '../usermenu/user1';


@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  hide = true;
  constructor(private _route:Router,private dialogRef:MatDialogRef<ConfirmationComponent>,@Inject(MAT_DIALOG_DATA) public data:user1) { }

  ngOnInit() {
   }
  OnOkClick(password)
  {
    if(password==localStorage.getItem('password'))
    {
      this.dialogRef.close();
      this._route.navigate([localStorage.getItem('link')]);
    }
  }
  OnCancelClick()
  {
    this.dialogRef.close();
  }

}
