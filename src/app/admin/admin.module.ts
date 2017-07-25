import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { LibCommonModule } from './../lib/lib.module';
import { adminRouting } from './admin.routes';
import { LoadingComponent } from './loading_component/loading_component.component';

import { AdminRootComponent } from './admin_root.component';
import { AdminLoginComponent } from './login/admin_login.component';
import { PortfolioListComponent } from './portfolio_list/portfolio_list.component';
import { PortfolioPostComponent } from './portfolio_write/portfolio.component';
import { PortfolioPostService } from './portfolio_write/portfolio_post.service';

enableProdMode();
@NgModule({
  declarations: [
    PortfolioListComponent,
    PortfolioPostComponent,
    AdminRootComponent,
    AdminLoginComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule,
    adminRouting,
    LibCommonModule
  ],
  exports: [],
  bootstrap: [AdminRootComponent]
})
export class AdminSideModule {

}
