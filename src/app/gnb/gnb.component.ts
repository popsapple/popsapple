import { Component, AfterViewInit, Inject } from '@angular/core';
import { LoadTemplateScript } from '../loadjs/loadscript.service';
import { Directive, HostListener, ViewChild, ElementRef, Renderer } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
declare var $: any;
@Directive({
  selector: '[menu-item]'
})
export class MenuItemDirective implements AfterViewInit {
  targetname: string;
  targetposition: number;
  current_target: any;
  constructor(@Inject(DOCUMENT) private document: any,private _el:ElementRef,private renderer:Renderer){
    this.targetname;
  }

  @HostListener("click", ['$event'])
  onMenuClick($event) {
    this.current_target = $("#"+this.targetname); //document.getElementById(this.targetname);
    this.targetposition = this.current_target.offset().top;
    let position = this.targetposition;
    if(this.targetname == 'Menu_Contact'){
      position = $("body").height();
    }
    $("html, body").animate({ scrollTop: position }, 500);
    $(".gnb-toggle-btn").click();
    this.current_target.focus();
  }

  ngAfterViewInit(){
    this.targetname = this._el.nativeElement.getAttribute('data-targeting');
  }

}
@Component({
  selector: 'gnb',
  templateUrl: './gnb.component.html',
  styleUrls: ['./../../assets/css/gnb.component.compact.css'],
  providers: [LoadTemplateScript]
})
export class GnbComponent {
  gnb_script = new LoadTemplateScript().setScript('./../../assets/js/gnbnav.js');
}
