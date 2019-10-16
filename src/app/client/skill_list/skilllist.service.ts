import {
  Component,
  Injectable,
  ViewChild,
  AfterViewInit,
  ElementRef,
  Renderer
} from "@angular/core";
import { BaseChartDirective } from "ng2-charts";
@Component({
  selector: "skill-chart",
  templateUrl: "./skillchart.component.html",
  styles: [
    `
      .sikllchart {
        margin: 4rem auto 4rem auto;
        text-align: center;
        display: table !important;
      }
      .sikllchart canvas {
        max-width: 30rem;
        width: 90% !important;
        height: auto !important;
        margin: auto;
      }
      .sikllchart > div {
        display: table-cell !important;
        width: 100% !important;
      }
    `
  ]
})
@Injectable()
export class MainSkillListService implements AfterViewInit {
  @ViewChild(BaseChartDirective) public _chart;
  public polarAreaChartLabels: string[] = [
    "Reactive web",
    "Accessibility Web",
    "Work efficiency",
    "Teamwork"
  ];
  public polarAreaChartData: number[] = [100, 95, 100, 90];
  public polarAreaLegend: boolean = true;
  public polarchartColors: any[] = [
    {
      // second color
      backgroundColor: [
        "rgb(56,130,159,0.8)",
        "rgb(56,77,159,0.8)",
        "rgb(73,56,159,0.8)",
        "rgb(217,93,113,0.8)",
        "rgb(93,133,217,0.8)"
      ],
      borderColor: "rgba(0,0,0,0)",
      pointBackgroundColor: "rgba(0,0,0,0)",
      pointBorderColor: "rgba(0,0,0,0)",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(0,0,0,0)"
    }
  ];
  public polarchartOptions: any = {
    legend: {
      display: false
    },
    title: {
      display: false
    },
    scales: {
      display: false
    }
  };
  public polarAreaChartType: string = "polarArea";
  // events
  public chartHovered(e: any): void {
    this._chart.refresh();
  }
  // events
  public chartClicked(e: any): void {}

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    if (this.el.nativeElement.querySelector("iframe")) {
      this.el.nativeElement
        .querySelector("iframe")
        .setAttribute("aria-hidden", "true");
      this.el.nativeElement
        .querySelector("iframe")
        .setAttribute("title", "Chart");
    }
  }
}
