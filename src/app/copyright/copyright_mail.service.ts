import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CopyrightComponent } from './copyright.component';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
//Observable
@Injectable()
export class CopyrightMailService {
  public copyrightComponent:CopyrightComponent;
  public SubmitContactMailSend(sendEmailForm: NgForm) {
    let that = this;
    let headers = new Headers({'Content-Type': 'application/json'});
    this.http.post('/send_email',JSON.stringify(sendEmailForm.value),{'headers': headers}).subscribe(
      data => {
        that.copyrightComponent.ResponsedDataPrint();
        alert(data.json().message);
      },error => {
        alert('다시 전송해주세요.');
      },() => {
        //console.log("작업완료");
      });
  }
  constructor(private sendEmailForm: NgForm, private http: Http){
    // , private testval?: number 이렇게 선언하면 testval 매개변수는 있던 없던 상관없음.
    // 만약 private testval: number = "whatever" 이렇게 선언시 세번째 매개변수의 기본값은 whatever 가 됨
    // 기본값 선언과 ? 는 중첩될 수 없음.
    this.copyrightComponent = new CopyrightComponent(this.http);
    console.log("copyrightComponent :: "+this.copyrightComponent.ResponsedDataPrint);
    this.SubmitContactMailSend(this.sendEmailForm);
  }
}
