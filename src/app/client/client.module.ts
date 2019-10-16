import { BrowserModule } from "@angular/platform-browser";
import { NgModule, enableProdMode } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ChartsModule } from "ng2-charts";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { LibCommonModule } from "./../lib/lib.module";

import { ClientRootComponent } from "./client_root.component";
import { MainVisualComponent } from "./main_page/main_page.component";
import { MainVisualItemComponent } from "./main_visual/mainvisual.component";
import { GnbComponent } from "./gnb/gnb.component";
import { MenuItemDirective } from "./gnb/gnb.component";
import { PortfolioListComponent } from "./portfolio/portfolio_list.component";
import { PortfolioChartComponent } from "./portfolio/portfolio_chart.component";
import { BaseChartDemoComponent } from "./chart/chart.component";
import { MainProfileMe } from "./main_profile/mainprofile.component";
import { MainSkillList } from "./skill_list/skilllist.component";
import { MainSkillListService } from "./skill_list/skilllist.service";
import { CopyrightComponent } from "./copyright/copyright.component";
import { ScrollPointCheckDirective } from "./scrollpoint_ele/scrollpoint.directive";

enableProdMode();
@NgModule({
  declarations: [
    ClientRootComponent,
    MainVisualComponent,
    MainVisualItemComponent,
    GnbComponent,
    MenuItemDirective,
    PortfolioListComponent,
    PortfolioChartComponent,
    BaseChartDemoComponent,
    MainProfileMe,
    MainSkillList,
    MainSkillListService,
    CopyrightComponent,
    ScrollPointCheckDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    ReactiveFormsModule,
    ChartsModule,
    LibCommonModule
  ],
  exports: [],
  bootstrap: [ClientRootComponent]
})
export class ClientSideModule {}
