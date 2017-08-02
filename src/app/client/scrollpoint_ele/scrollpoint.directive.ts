import { Directive, HostListener, ViewChild, ElementRef, Renderer } from '@angular/core';
@Directive({
  selector: '[scroll-check]'
})
export class ScrollPointCheckDirective {
  active_class:string;
  offset_top:number;
  window_top:number;
  class_list:string;
  constructor(private _el:ElementRef,private renderer:Renderer){
    this.active_class;
    this.offset_top = 0;
  }
  //@HostListener('click', ['$event'])
  //c_onEnterrr($event) {
  @HostListener("window:scroll", ['$event'])
  onWindowScroll($event) {
    this.offset_top = this._el.nativeElement.offsetTop;
    this.window_top = $event.currentTarget.scrollY || $event.currentTarget.pageYOffset;
    this.class_list = this._el.nativeElement.getAttribute('class');
    alert("맥에서 안됨 확인.... :: "+this.active_class+" :: "+this.class_list);
    if(this.active_class == undefined){
      this.active_class = this.class_list+" scroll_active";
    }
    if(this.window_top > (this.offset_top-(this.offset_top/5))){
      this.renderer.setElementAttribute(this._el.nativeElement, 'class', this.active_class);
    }
  }
}
