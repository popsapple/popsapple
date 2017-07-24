import { Component,ViewChild,Directive,ElementRef,Renderer,Inject,OnInit } from '@angular/core';
import { LoadingElement } from './../../lib/loading/app_loading.directive';
import { DOCUMENT } from '@angular/platform-browser';
@Component({
  selector: 'main-root',
  templateUrl: './main_page.component.html',
  styleUrls: ['./../../../assets/css/app.component.compact.css']
})
export class MainVisualComponent implements OnInit {
  active_class:string;
  class_list:string;
  client:any;
  static PageLoadingCheck: any;
  @ViewChild(LoadingElement) loading_el: LoadingElement;
  constructor(@Inject(DOCUMENT) private document: any,private renderer:Renderer) {
    console.log(this.document.location.href);
  }

  ngOnInit(){
    MainVisualComponent.PageLoadingCheck = ():void => {
      let that = this;
      that.client = new XMLHttpRequest();
      let location = that.document.location.href;
      that.class_list = that.loading_el.el.getAttribute('class');
      that.client.open("get", location);
      that.client.send();
      if(that.client.onprogress != undefined){ // XMLHttpRequest2 라서 있을 때 없을 때를 구분해야 함.
        that.client.onprogress = function(pe) {
          if(pe.lengthComputable) {
            let scroll_loading_ = Math.floor((parseInt(pe.loaded)*100)/parseInt(pe.total));
            let scroll_loading = Math.floor(scroll_loading_/10)*10;
            that.active_class = that.class_list+" point"+scroll_loading;
            that.renderer.setElementAttribute(that.loading_el.el, 'class', that.active_class);
          }
        }
        that.client.onloadend = function(pe) {
          setTimeout(function(){
            that.renderer.setElementAttribute(that.loading_el.el, 'class', that.active_class+' done');
          },1000);
        }
      }else{
          const endloading = function(){
          let point_time_ = setInterval(function(){
            count+= 10;
            (function(count,point_time){
              that.active_class = that.class_list+" point"+count;
              that.renderer.setElementAttribute(that.loading_el.el, 'class', that.active_class);
              if(count == 100){
                clearInterval(point_time_);
                setTimeout(function(){
                  that.renderer.setElementAttribute(that.loading_el.el, 'class', that.active_class+' done');
                },1000);
              }
            })(count,point_time);
          },2000);
        }
        let count = 0;
        let point_time = setInterval(function(){
          count+= 10;
          (function(count,point_time){
            that.active_class = that.class_list+" point"+count;
            that.renderer.setElementAttribute(that.loading_el.el, 'class', that.active_class);
            if(count == 40){
              clearInterval(point_time);
            }
          })(count,point_time);
        },1000);
        clearInterval(point_time);
        endloading();
      }
    }
  }
}
