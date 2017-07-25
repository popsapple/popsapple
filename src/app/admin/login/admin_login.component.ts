import { Component, AfterViewInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
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
  ngAfterViewInit(){
    LoadingComponent.PageLoadingCheck();
  }
  onAdminLogin(){
    
  }
}
