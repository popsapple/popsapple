import { Component,ViewChild,ElementRef,AfterViewInit,AfterViewChecked,Renderer } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'admin-root',
  templateUrl: './admin_root.component.html',
  styleUrls: ['./../../assets/css/app.component.compact.css']
})
export class AdminRootComponent implements AfterViewChecked {
  @ViewChild('portfoliolistmenu') portfoliolistmenuEle: ElementRef;
  @ViewChild('portfoliowritemenu') portfoliowritemenuEle: ElementRef;

  constructor(private router: Router,private renderer:Renderer){}
  ngAfterViewChecked(){
    if(this.router.url.indexOf('/admin/portfolio_write') != -1){
      this.renderer.setElementAttribute(this.portfoliolistmenuEle.nativeElement, 'class', '');
      this.renderer.setElementAttribute(this.portfoliowritemenuEle.nativeElement, 'class', 'active');
    }else if(this.router.url.indexOf('/admin/portfolio_write') == -1){
      this.renderer.setElementAttribute(this.portfoliowritemenuEle.nativeElement, 'class', '');
      this.renderer.setElementAttribute(this.portfoliolistmenuEle.nativeElement, 'class', 'active');
    }
  }
}
