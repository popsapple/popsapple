import { Directive,ElementRef, Renderer, AfterContentInit} from '@angular/core';
@Directive({
  selector: '[loading-div]'
})
export class LoadingElement implements AfterContentInit{
  el:any
  constructor(private _el:ElementRef){
    console.log("디렉티브에서 가져옴00 :: "+this.el);
      this.el = this._el.nativeElement;
  }
  ngAfterContentInit(){
  console.log("디렉티브에서 가져옴11 :: "+this.el);
    this.el = this._el.nativeElement;
  }
}
