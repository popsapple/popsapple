import { NgModule, enableProdMode } from '@angular/core';
import { LoadingElement } from './loading/app_loading.directive';

enableProdMode();
@NgModule({
  declarations: [
    LoadingElement
  ],
  imports: [],
  exports: [
    LoadingElement
  ]
})
export class LibCommonModule {
}
