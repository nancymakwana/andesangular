import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserauthgaurdService implements CanActivate{
  canActivate(_active:ActivatedRouteSnapshot,_state:RouterStateSnapshot):boolean
  {
      if(localStorage.getItem('fname')!=null)
      {
        return true;
      }
      else
      {
          alert('YOU NEED TO LOGIN FIRST');
          this._router.navigate(['']);
          return false;
      }
  }

  constructor(private _router:Router) { }
}
