import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { enableProdMode } from "@angular/core";
import { AdminSideModule } from "./admin/admin.module";
import { ClientSideModule } from "./client/client.module";
import { RouterModule } from "@angular/router";
import { routing } from "./app.routes";
import { SafeHtmlPipe } from "./../app/client/portfolio/portfolio_list.component";

import { MainPageComponent } from "./app.component";

enableProdMode();
@NgModule({
  declarations: [MainPageComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AdminSideModule,
    ClientSideModule,
    RouterModule,
    routing,
    SafeHtmlPipe
  ],
  providers: [],
  exports: [SafeHtmlPipe],
  bootstrap: [MainPageComponent]
})
export class AppModule {}
