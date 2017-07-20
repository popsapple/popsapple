import { Component, OnInit} from '@angular/core';
import { NgForm, FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CopyrightMailService, EmailData } from './copyright_mail.service';
import { LoadTemplateScript } from './../../lib/loadjs/loadscript.service';
@Component({
  selector: 'copyright-item',
  templateUrl: './copyright.component.html',
  styleUrls: ['./../../../assets/css/copyright.component.compact.css'],
  providers: [LoadTemplateScript,CopyrightMailService]
})
export class CopyrightComponent implements OnInit{
  ResponsedDataPrint: Object;
  sendEmailForm: FormGroup;
  static _sendEmailForm: FormGroup;
  SubmitContactMail() {
    sendEmailFormCheck = true;

    CopyrightComponent._sendEmailForm.get("fromname").setValidators(Validators.compose([customVailCheck])); // 값 검증 이벤트(?) 셋팅
    CopyrightComponent._sendEmailForm.get("subject").setValidators(Validators.compose([customVailCheck]));
    CopyrightComponent._sendEmailForm.get("email").setValidators(Validators.compose([customVailCheck,customVailCheckEmail]));
    CopyrightComponent._sendEmailForm.get("message").setValidators(Validators.compose([customVailCheck]));

    CopyrightComponent._sendEmailForm.get("fromname").updateValueAndValidity({ onlySelf: false, emitEvent: true }); // 값 검증 이벤트(?) 실행
    CopyrightComponent._sendEmailForm.get("subject").updateValueAndValidity({ onlySelf: false, emitEvent: true });
    CopyrightComponent._sendEmailForm.get("email").updateValueAndValidity({ onlySelf: false, emitEvent: true });
    CopyrightComponent._sendEmailForm.get("message").updateValueAndValidity({ onlySelf: false, emitEvent: true });

    if(sendEmailFormCheck){
      new CopyrightMailService(this.http);
    }else{
      alert(sendEmailFormCheckMessage);
      return false;
    }
  }

  ResponsedDataCheck(responsed_data:EmailData):Observable<any> {
    alert(responsed_data.message);
    return Observable.create(observer => {
      //observer.next(this._people); 다음 작업을 이어서 진행할 때
      observer.complete();
   });
  };

  constructor(private http: Http){

  }

  ngOnInit(){
    this.sendEmailForm = new FormGroup({ //FormGroup 을 쓸 때에 반드시 한번은 정의해줘야 하므로....
      fromname: new FormControl(''),
      subject: new FormControl(''),
      email: new FormControl(''),
      message: new FormControl('')
    });
    CopyrightComponent._sendEmailForm = this.sendEmailForm;
  }
}

let sendEmailFormCheck: Boolean;
let sendEmailFormCheckMessage: String;

function customVailCheck(c: FormControl) {
  if(sendEmailFormCheck){
    let checkEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/g;
    if(c.value == ""){
      sendEmailFormCheck = false;
      sendEmailFormCheckMessage = '내용을 입력해주세요';
    }else{
      sendEmailFormCheck = true;
    }
  }
  return sendEmailFormCheck;
}

function customVailCheckEmail(c: FormControl) {
  if(sendEmailFormCheck){
    let checkEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/g;
    if(!checkEmail.test(c.value)){
      sendEmailFormCheck = false;
      sendEmailFormCheckMessage = '이메일 형식에 맞게 입력해주세요';
    }
    if(checkEmail.test(c.value)){
      sendEmailFormCheck = true;
    }
  }
  return sendEmailFormCheck;
  //return {vaild:false, errorMsg:'이메일 형식에 맞게 입력해주세요'};   // 템플릿에선 sendEmailForm.controls['email'].errors.errorMsg 접근
}
