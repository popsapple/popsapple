import { Component, AfterViewInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { LoadingComponent } from './../loading_component/loading_component.component';
import { AdminLoginService } from './admin_login.service';
@Component({
  selector: 'admin-login',
  templateUrl: './admin_login.component.html',
  styleUrls: ['./../../../assets/css/portfolio_write.component.compact.css'],
  providers: [AdminLoginService]
})
export class AdminLoginComponent implements AfterViewInit{
  AdminLoginForm: FormGroup;
  static _AdminLoginForm: FormGroup;
  constructor(private http: Http){
    this.AdminLoginForm = new FormGroup({ //FormGroup 을 쓸 때에 반드시 한번은 정의해줘야 하므로....
      id: new FormControl(''),
      pw: new FormControl('')
    });
  }
  ngAfterViewInit(){
    LoadingComponent.PageLoadingCheck();
    AdminLoginComponent._AdminLoginForm = this.AdminLoginForm;
  }
  onAdminLogin(){
    console.log("onAdminLogin");
    let AdminLoginServiceClass = new AdminLoginService(this.http);
    AdminLoginService.AdminLoginSubmitPost();
  }
}
