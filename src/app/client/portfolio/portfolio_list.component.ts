import { Component, Input, OnInit } from "@angular/core";
import { LoadTemplateScript } from "./../../lib/loadjs/loadscript.service";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { MainVisualComponent } from "./../main_page/main_page.component";
import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
//import { CopyrightComponent } from './copyright.component';
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

@Pipe({
  name: "safeHtml"
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: any, args?: any): any {
    if (value.indexOf("(") != -1) {
      console.log("변형 " + value);
      return this.sanitizer.bypassSecurityTrustHtml(value);
    } else {
      return value;
    }
  }
}

@Component({
  selector: "portfolio-list",
  templateUrl: "./portfolio_list.component.html",
  styleUrls: ["./../../../assets/css/portfolio_list.component.compact.css"],
  providers: [LoadTemplateScript]
})
export class PortfolioListComponent implements OnInit {
  portfolio: PortfolioData;
  portfolio_list: PortfolioListData;
  portfolio_list_flex_script: any;

  constructor(private http: Http) {}
  ngOnInit() {
    let headers = new Headers({ "Content-Type": "application/json" });
    this.http.get("/portfolio_list", { headers: headers }).subscribe(
      data => {
        this.portfolio = {
          portfolio_list: data.json()
        };
        this.portfolio_list_flex_script = new LoadTemplateScript().setScript(
          "./../../assets/js/movefollitem.js"
        );
        MainVisualComponent.PageLoadingCheck();
      },
      error => {
        alert("다시 전송해주세요. PortfolioListComponent");
      },
      () => {}
    );
  }
}
export interface PortfolioData {
  portfolio_list: PortfolioListData;
}
export interface PortfolioListData {
  url: string;
  thumnail: string;
  title: string;
  date: string;
  des_percent: number;
  publ_percent: number;
  dev_percent: number;
  desc: string;
  post_index: number;
}
