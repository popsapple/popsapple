import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { enableProdMode } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { MainVisualComponent } from './app.component';
import { MainVisualItemComponent } from './main_visual/mainvisual.component';
import { PortfolioListComponent } from './portfolio/portfolio_list.component';
import { PortfolioChartComponent } from './portfolio/portfolio_chart.component';
import { MainProfileMe } from './main_profile/mainprofile.component';
import { MainSkillList } from './skill_list/skilllist.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { BaseChartDemoComponent } from './chart/chart.component';
import { GnbComponent } from './gnb/gnb.component';

import { MainSkillListService } from './skill_list/skilllist.service';
import { CopyrightMailService } from './copyright/copyright_mail.service';

enableProdMode();
@NgModule({
  declarations: [
    MainVisualComponent,
    MainVisualItemComponent,
    GnbComponent,
    PortfolioListComponent,
    PortfolioChartComponent,
    BaseChartDemoComponent,
    MainProfileMe,
    MainSkillList,
    MainSkillListService,
    CopyrightComponent
  ],
  imports: [
    BrowserModule,ChartsModule,FormsModule,HttpModule,ReactiveFormsModule
  ],
  providers: [CopyrightMailService],
  bootstrap: [MainVisualComponent]
})
export class AppModule { }
