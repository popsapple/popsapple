import { Component, Injectable } from '@angular/core';
@Component({
  selector: 'skill-chart',
  templateUrl: './skillchart.component.html'
})
@Injectable()
export class MainSkillListService {
  // PolarArea
  public polarAreaChartLabels:string[] = ['Reactive web', 'Accessibility Web', 'Work efficiency', 'Teamwork', 'Unit price'];
  public polarAreaChartData:number[] = [100, 90, 80, 100, 70];
  public polarAreaLegend:boolean = true;

  public polarAreaChartType:string = 'polarArea';
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
  public chartHovered(e:any):void {
    console.log(e);
  }
}
