import { Injectable, Input, ElementRef, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Http, Headers, Response, RequestOptionsArgs, RequestOptions, ResponseContentType } from '@angular/http';
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
    this.http.put('/portfolio_post',JSON.stringify(PortfolioPostComponent._WritePortfolio.value),{'headers': headers}).subscribe(
      data => {
        this.PortfolioPostComponent.ResponsedDataCheck(data.json()).subscribe(():void => {
        });
      },error => {
        alert('다시 전송해주세요. SubmitPortfolioPostSend');
      },() => {
      });
  }
  public SubmitPortfolioThumbnailSend(inputEl:any) {
    const files = inputEl.nativeElement.files;
    let files_data = files[0];

    let data = new FormData();

    if(files_data) {
      data.append('thumnail', files_data); // <input type='' name='thumnail' value='files_data' /> 에 해당한다.
    }

    let header = new Headers({'enctype': 'multipart/form-data'});
    this.http.put('/portfolio_thumnail', data, header).subscribe(
      data => {
        this.PortfolioPostComponent.ThumfileUpload({message: data.json().message,filepath: data.json().filepath}).subscribe(():void => {
        });
      },error => {
        alert('다시 전송해주세요. :: '+error);
      },() => {
    });
  }
  public getPortfolioPostValue() {
    let that = this;
    let headers = new Headers({'Content-Type': 'application/json'});
    this.http.get('/portfolio_post'+'?'+'post_index='+PortfolioPostComponent.post_index,{ headers: headers }).subscribe(
      data => {
        let responsed_data:PortfolioListData = ParseJsonToObject(data);
        this.PortfolioPostComponent.ValueDataCheck(responsed_data).subscribe(():void => {
        });
      },error => {
        alert('다시 전송해주세요. :: '+error);
      },() => {
    });
  }
  public onDeletePortfolioPost() {
    let that = this;
    let headers = new Headers({'Content-Type': 'application/json'});
    this.http.delete('/portfolio_post',{ headers: headers }).subscribe(
      data => {
        if(data.json().url == undefined){
          alert(data.json().message);
          return false;
        }
        window.location.href = data.json().url;
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
