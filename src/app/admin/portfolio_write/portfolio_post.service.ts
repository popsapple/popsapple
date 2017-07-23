import { Injectable, Input, ElementRef, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { PortfolioPostComponent } from './portfolio.component';
import { FileUploader } from 'ng2-file-upload';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
//Observable
@Injectable()
export class PortfolioPostService {
  public PortfolioPostComponent: PortfolioPostComponent;
  @Input() multiple: boolean = false;

  public SubmitPortfolioPostSend() {
    let that = this;
    let headers = new Headers({'Content-Type': 'application/json'});
    this.http.put('/portfolio_post_put',JSON.stringify(PortfolioPostComponent._WritePortfolio.value),{'headers': headers}).subscribe(
      data => {
        this.PortfolioPostComponent.ResponsedDataCheck(data.json().message).subscribe(():void => {
        });
      },error => {
        alert('다시 전송해주세요.');
      },() => {
      });
  }
  public SubmitPortfolioThumbnailSend(inputEl:any) {
    let that = this;
    let headers = new Headers({'Content-Type': 'multipart/form-data'});
    // 브라우저가 자동 지정하므로 컨텐츠 타입 헤더를 지정하면 전송이 되지 않는다.... -_-....
    // console.log("업로드 파일 정보 :: "+JSON.stringify(inputElele));
    console.log("업로드 파일 정보 02 :: "+inputEl.nativeElement.files[0]);
    this.http.put('/upload_thumnail', inputEl.nativeElement.files[0]).subscribe(
      data => {
        this.PortfolioPostComponent.ThumfileUpload(data.json().message).subscribe(():void => {
        });
      },error => {
        alert('다시 전송해주세요. :: '+error);
      },() => {
    });
  }
  public getPortfolioPostValue() {
    let that = this;
    let headers = new Headers({'Content-Type': 'application/json'});
    this.http.get('/portfolio_post_info'+'?'+'post_index='+PortfolioPostComponent.post_index,{ headers: headers }).subscribe(
      data => {
        let responsed_data:PortfolioListData = ParseJsonToObject(data);
        this.PortfolioPostComponent.ValueDataCheck(responsed_data).subscribe(():void => {
        });
      },error => {
        alert('다시 전송해주세요. :: '+error);
      },() => {
    });
  }
  constructor(private http: Http){
    // , private testval?: number 이렇게 선언하면 testval 매개변수는 있던 없던 상관없음.
    // 만약 private testval: number = "whatever" 이렇게 선언시 세번째 매개변수의 기본값은 whatever 가 됨
    // 기본값 선언과 ? 는 중첩될 수 없음.
    this.PortfolioPostComponent = new PortfolioPostComponent(this.http);
  }
}
export interface PortfolioListData {
  url: string,
  thumnail: string,
  title: string,
  date: string,
  des_percent: number,
  publ_percent: number,
  dev_percent: number,
  desc: string,
  post_index: number
}
function ParseJsonToObject(data:any): PortfolioListData {
  let obj:PortfolioListData = {
    url: data.json()[0].url,
    thumnail: data.json()[0].thumnail,
    title: data.json()[0].title,
    date: data.json()[0].date,
    des_percent: data.json()[0].des_percent,
    publ_percent: data.json()[0].publ_percent,
    dev_percent: data.json()[0].dev_percent,
    desc: data.json()[0].desc,
    post_index: data.json()[0].post_index
  };
  return obj;
}
