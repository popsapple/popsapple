import { Injectable } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CopyrightComponent } from './copyright.component';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
//Observable
@Injectable()
export class CopyrightMailService {
  public copyrightComponent: CopyrightComponent;
  public SubmitContactMailSend() {
    let that = this;
    let headers = new Headers({'Content-Type': 'application/json'});
    this.http.post('/send_email',JSON.stringify(CopyrightComponent._sendEmailForm.value),{'headers': headers}).subscribe(
      data => {
        let responsed_data:EmailData = ParseJsonToObject(data);
        this.copyrightComponent.ResponsedDataCheck(responsed_data).subscribe(():void => {
        });
      },error => {
        alert('다시 전송해주세요.');
      },() => {
      });
  }
  constructor(private http: Http){
    // , private testval?: number 이렇게 선언하면 testval 매개변수는 있던 없던 상관없음.
    // 만약 private testval: number = "whatever" 이렇게 선언시 세번째 매개변수의 기본값은 whatever 가 됨
    // 기본값 선언과 ? 는 중첩될 수 없음.
    this.copyrightComponent = new CopyrightComponent(this.http);
    this.SubmitContactMailSend();
  }
}
export interface EmailData {
    message: string
}
function ParseJsonToObject(data:any): EmailData {
  let obj:EmailData = {
    message: data.json().message
  };
  return obj;
}
