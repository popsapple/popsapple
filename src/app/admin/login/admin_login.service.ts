import { Injectable } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Routes,CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { AdminLoginComponent } from './admin_login.component';
@Injectable()
export class AdminLoginService implements CanActivate {
  static AdminLoginSubmitPost: any;
  static AdminLoginCheckPost: any;
  AdminLoginSubmitPostFun(){
    console.log("BBBBBB :: "+"AdminLoginSubmitPostFun");
    let headers = new Headers({'Content-Type': 'application/json'});
    this.http.post('/admin_association',JSON.stringify(AdminLoginComponent._AdminLoginForm.value),{'headers': headers}).subscribe(
      data => {
        if(data.json().association == true){
          window.location.href = data.json().url;
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
    console.log("AAAAAA :: "+"AdminLoginService");
    AdminLoginService.AdminLoginSubmitPost = ():void => {this.AdminLoginSubmitPostFun()};
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean { // Can이 아니라 can...
    console.log("로그인체크");
    this.AdminLoginCheckPostFun();
    return true;
  }
}
