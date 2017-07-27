import { Component,ViewChild,ElementRef,AfterViewInit,AfterViewChecked,Renderer } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';
@Component({
  selector: 'admin-root',
  templateUrl: './admin_root.component.html',
  styleUrls: ['./../../assets/css/app.component.compact.css']
})
export class AdminRootComponent implements AfterViewChecked {
  @ViewChild('portfoliolistmenu') portfoliolistmenuEle: ElementRef;
  @ViewChild('portfoliowritemenu') portfoliowritemenuEle: ElementRef;

  constructor(private router: Router,private renderer:Renderer,private http: Http){}
  AdminLogout(){
    let headers = new Headers({'Content-Type': 'application/json'});
    this.http.post('/logout','{}',{'headers': headers}).subscribe(
      data => {
        window.location.href = data.json().url;
      },error => {
        alert('다시 전송해주세요.');
      },() => {
    });
  }
  ngAfterViewChecked(){
    if(this.router.url.indexOf('/admin/portfolio_write') != -1){
      this.renderer.setElementAttribute(this.portfoliolistmenuEle.nativeElement, 'class', '');
      this.renderer.setElementAttribute(this.portfoliowritemenuEle.nativeElement, 'class', 'active');
    }else if(this.router.url.indexOf('/admin/portfolio_write') == -1){
      this.renderer.setElementAttribute(this.portfoliowritemenuEle.nativeElement, 'class', '');
      this.renderer.setElementAttribute(this.portfoliolistmenuEle.nativeElement, 'class', 'active');
    }else if(this.router.url == '/#/admin'){
      this.renderer.setElementAttribute(this.portfoliowritemenuEle.nativeElement, 'class', '');
      this.renderer.setElementAttribute(this.portfoliolistmenuEle.nativeElement, 'class', '');
    }
  }
}
