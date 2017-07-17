import { Directive,ElementRef, Renderer} from '@angular/core';
@Directive({
  selector: '[loading-div]'
})
export class LoadingElement {
  el:any
  constructor(private _el:ElementRef){
    this.el = this._el.nativeElement;
  }
}
