import { Component, OnInit, Input, ElementRef, ViewChild} from '@angular/core';
import { NgForm, FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { PortfolioPostService, PortfolioListData } from './portfolio_post.service';
import { LoadTemplateScript } from './../../lib/loadjs/loadscript.service';
import { Router,ActivatedRoute,Params } from '@angular/router';
@Component({
  selector: 'admin-portfolio-item',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./../../../assets/css/portfolio_list.component.compact.css'],
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
    this.PortfolioPostService_.SubmitPortfolioPostSend();
  }

  SubmitPortfolioThumbnail() {
    console.log("업로드 파일 정보 00 :: "+this.inputEl.nativeElement.files[0]);
    console.log("업로드 파일 정보 01 :: "+JSON.stringify(this.inputEl.nativeElement.files[0]));
    this.PortfolioPostService_.SubmitPortfolioThumbnailSend(this.inputEl);
  }

  ResponsedDataCheck(responsed_data:String):Observable<any> {
    alert(responsed_data);
    return Observable.create(observer => {
      observer.complete();
   });
  };

  ValueDataCheck(responsed_data:PortfolioListData):Observable<any> {
    PortfolioPostComponent._WritePortfolio.get("url").setValue(responsed_data.url,{});
    PortfolioPostComponent._WritePortfolio.get("thumnail_file").setValue(responsed_data.thumnail,{});
    PortfolioPostComponent._WritePortfolio.get("title").setValue(responsed_data.title,{});
    PortfolioPostComponent._WritePortfolio.get("des_percent").setValue(responsed_data.des_percent,{});
    PortfolioPostComponent._WritePortfolio.get("publ_percent").setValue(responsed_data.publ_percent,{});
    PortfolioPostComponent._WritePortfolio.get("dev_percent").setValue(responsed_data.dev_percent,{});
    PortfolioPostComponent._WritePortfolio.get("desc").setValue(responsed_data.desc,{});
    return Observable.create(observer => {
      observer.complete();
   });
  };

  ThumfileUpload(responsed_data:String):Observable<any> {
    alert(responsed_data);
    return Observable.create(observer => {
      observer.complete();
    });
  }

  constructor(private http: Http, private route?: ActivatedRoute, private router?: Router){
  }

  ngOnInit(){
    this.WritePortfolio = new FormGroup({ //FormGroup 을 쓸 때에 반드시 한번은 정의해줘야 하므로....
      url: new FormControl(''),
      thumnail_file: new FormControl(''),
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
        }
      });
      PortfolioPostComponent._WritePortfolio = this.WritePortfolio;
    }
  }
}
