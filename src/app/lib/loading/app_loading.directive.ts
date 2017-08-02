import { Directive,ElementRef, Renderer, AfterContentInit} from '@angular/core';
@Directive({
  selector: '[loading-div]'
})
export class LoadingElement implements AfterContentInit{
  el:any
  constructor(private _el:ElementRef){
      this.el = this._el.nativeElement;
  }
  ngAfterContentInit(){
    this.el = this._el.nativeElement;
  }
}
