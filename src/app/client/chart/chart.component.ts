import { Component, Directive, Input, ViewChild, AfterViewInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
@Component({
selector: 'base-chart',
templateUrl: './chart-component.html',
styleUrls: ['./../../../assets/css/portfolio_chart.component.compact.css']
})
export class BaseChartDemoComponent {
  @ViewChild(BaseChartDirective) public _chart;
  @Input() chartdata1 = "300";
  @Input() chartdata2 = "500";
  @Input() type1 = "normal";

  public pieChartType:string = 'doughnut';
  public value_one:any;
  public value_two:any;
  // Pie
  public pieChartLabels:string[] = ['dose', 'dosenot'];
  public chartColors: any[] = [
        {
          backgroundColor: ['rgba(255,255,255,1)','rgba(180,180,180,0.5)'],
          borderColor: 'rgba(0,0,0,0)',
          pointBackgroundColor: 'rgba(0,0,0,0)',
          pointBorderColor: 'rgba(0,0,0,0)',
          pointHoverBackgroundColor: 'rgba(0,0,0,0)',
          pointHoverBorderColor: 'rgba(0,0,0,0)',
          animateRotate: false
        }];
  public chartOptions:any = {
    legend: {
      display: false
    },
    tooltips: {
      enabled: false
    }
  }
  public randomizeType():void {
    this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
  }
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    this._chart.refresh();
  }
}
