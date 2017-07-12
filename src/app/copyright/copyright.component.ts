import { Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import { Http } from '@angular/http';
import { CopyrightMailService } from './copyright_mail.service';
import { LoadTemplateScript } from '../loadjs/loadscript.service';
@Component({
  selector: 'copyright-item',
  templateUrl: './copyright.component.html',
  styleUrls: ['./../../assets/css/copyright.component.compact.css'],
  providers: [CopyrightMailService,LoadTemplateScript]
})
export class CopyrightComponent {
  ResponsedDataPrint: any;
  public SubmitContactMail(sendEmailForm: NgForm):void {
    console.log("STEP01");
    new CopyrightMailService(sendEmailForm, this.http);
  }
  public ResponsedDataPrintfun():void {
    console.log("SETP05");
  }
  constructor(private http: Http){
    this.ResponsedDataPrint = () => {
      console.log("AAAAA");
    };
    console.log("SETP0000");
  }
  //:Observable {}
}
