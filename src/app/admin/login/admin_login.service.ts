import { Injectable } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Routes,CanActivate,CanActivateChild,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { AdminLoginComponent } from './admin_login.component';
@Injectable()
export class AdminLoginService implements CanActivate,CanActivateChild {
  static AdminLoginSubmitPost: any;
  static AdminLoginCheckPost: any;
  AdminLoginSubmitPostFun(){
    let headers = new Headers({'Content-Type': 'application/json'});
    this.http.post('/admin_association',JSON.stringify(AdminLoginComponent._AdminLoginForm.value),{'headers': headers}).subscribe(
      data => {
        if(data.json().association == true){
          window.location.href = data.json().url;
        }else{
          alert('로그인 정보를 다시 확인하세요.');
        }
      },error => {
        alert('다시 전송해주세요.');
      },() => {
    });
  }
  AdminLoginCheckPostFun(){
    let headers = new Headers({'Content-Type': 'application/json'});
    this.http.post('/check_association','{}',{'headers': headers}).subscribe(
      data => {
        if(data.json().association == false){
          window.location.href = data.json().url;
        }
      },error => {
        alert('다시 전송해주세요.');
      },() => {
    });
  }
  constructor(private http?: Http){
    AdminLoginService.AdminLoginSubmitPost = ():void => {this.AdminLoginSubmitPostFun()};
  }
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean { // Can이 아니라 can...
    this.AdminLoginCheckPostFun();
    return true;
  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }
}
