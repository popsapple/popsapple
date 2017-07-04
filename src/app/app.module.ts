import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MainVisualComponent } from './app.component';
import { MainVisualItemComponent } from './main_visual/mainvisual.component';
import { GnbComponent } from './gnb/gnb.component';

@NgModule({
  declarations: [
    MainVisualComponent,MainVisualItemComponent,GnbComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MainVisualComponent]
})
export class AppModule { }
