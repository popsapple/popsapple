import { Component, OnInit, Input, ElementRef, ViewChild} from '@angular/core';
import { NgForm, FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { PortfolioPostService, PortfolioListData } from './portfolio_post.service';
import { LoadTemplateScript } from './../../lib/loadjs/loadscript.service';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { LoadingComponent } from './../loading_component/loading_component.component';
@Component({
  selector: 'admin-portfolio-item',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./../../../assets/css/portfolio_write.component.compact.css'],
  providers: [LoadTemplateScript,PortfolioPostService]
})
export class PortfolioPostComponent implements OnInit{
  ResponsedDataPrint: Object;
  WritePortfolio: FormGroup;
  PortfolioPostService_: PortfolioPostService;
  @ViewChild('thumnail') inputEl: ElementRef;

  static _WritePortfolio: FormGroup;
  static post_index: any;

  SubmitPortfolioPost() {
    sendEmailFormCheck = true;
    PortfolioPostComponent._WritePortfolio.get("thumnail").setValidators(Validators.compose([customVailCheck])); // 값 검증 이벤트(?) 셋팅
    PortfolioPostComponent._WritePortfolio.get("title").setValidators(Validators.compose([customVailCheck]));
    PortfolioPostComponent._WritePortfolio.get("thumnail").updateValueAndValidity({ onlySelf: false, emitEvent: true }); // 값 검증 이벤트(?) 실행
    PortfolioPostComponent._WritePortfolio.get("title").updateValueAndValidity({ onlySelf: true, emitEvent: true });
    if(sendEmailFormCheck){
      this.PortfolioPostService_.SubmitPortfolioPostSend();
    }else{
      alert("썸네일 이미지와 제목은 필수입력입니다 :)");
    }
  }

  SubmitPortfolioThumbnail() {
    this.PortfolioPostService_.SubmitPortfolioThumbnailSend(this.inputEl);
  }

  ResponsedDataCheck(responsed_data:any):Observable<any> {
    alert(responsed_data.message);
    if(responsed_data.url != undefined){
      window.location.href = responsed_data.url;
    }
    return Observable.create(observer => {
      observer.complete();
   });
  };

  DeletePortfolioPost(){
    this.PortfolioPostService_.onDeletePortfolioPost();
  }

  ValueDataCheck(responsed_data:PortfolioListData):Observable<any> {
    PortfolioPostComponent._WritePortfolio.get("url").setValue(responsed_data.url,{});
    PortfolioPostComponent._WritePortfolio.get("thumnail").setValue(responsed_data.thumnail,{});
    PortfolioPostComponent._WritePortfolio.get("title").setValue(responsed_data.title,{});
    PortfolioPostComponent._WritePortfolio.get("des_percent").setValue(responsed_data.des_percent,{});
    PortfolioPostComponent._WritePortfolio.get("publ_percent").setValue(responsed_data.publ_percent,{});
    PortfolioPostComponent._WritePortfolio.get("dev_percent").setValue(responsed_data.dev_percent,{});
    PortfolioPostComponent._WritePortfolio.get("desc").setValue(responsed_data.desc,{});

    LoadingComponent.PageLoadingCheck();
    return Observable.create(observer => {
      observer.complete();
   });
  };

  ThumfileUpload(responsed_data:any):Observable<any> {
    PortfolioPostComponent._WritePortfolio.get("thumnail").setValue(responsed_data.filepath,{});
    alert(responsed_data.message);
    return Observable.create(observer => {
      observer.complete();
    });
  }

  constructor(private http: Http, private route?: ActivatedRoute, private router?: Router){
  }

  ngOnInit(){
    this.WritePortfolio = new FormGroup({ //FormGroup 을 쓸 때에 반드시 한번은 정의해줘야 하므로....
      url: new FormControl(''),
      thumnail: new FormControl(''),
      title: new FormControl(''),
      des_percent: new FormControl(''),
      publ_percent: new FormControl(''),
      dev_percent: new FormControl(''),
      desc: new FormControl('')
    });
    this.PortfolioPostService_ = new PortfolioPostService(this.http);
    if(this.route){
      this.route.params.subscribe(params=>{
        if(params['post_index'] != null){
          PortfolioPostComponent.post_index = params['post_index'];
          this.PortfolioPostService_.getPortfolioPostValue();
        }else{
          PortfolioPostComponent.post_index = undefined;
          LoadingComponent.PageLoadingCheck();
        }
      });
      PortfolioPostComponent._WritePortfolio = this.WritePortfolio;
    }
  }
}
let sendEmailFormCheck: Boolean;
function customVailCheck(c: FormControl) {
  console.log("값 체크 :: "+c.value);
  if(sendEmailFormCheck){
    if(c.value == ""){
      sendEmailFormCheck = false;
    }
  }
  return sendEmailFormCheck;
}
