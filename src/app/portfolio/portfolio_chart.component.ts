import { Component, Input } from '@angular/core';
import { LoadTemplateScript } from '../loadjs/loadscript.service';
@Component({
  selector: 'chart-parent',
  templateUrl: './portfolio_chart.component.html',
  providers: [LoadTemplateScript]
})
export class PortfolioChartComponent {
  @Input() chartdata01 = "경로";
  @Input() chartdata02 = "경로";
  @Input() type = "normal";
  datacheck:string = "출력확인";
}
