import { Component, OnInit } from '@angular/core';
import { single} from './data';

@Component({
  selector: 'app-vertical-chart',
  templateUrl: './vertical-chart.component.html',
  styleUrls: ['./vertical-chart.component.css']
})
export class VerticalChartComponent implements OnInit {
  single: any = single;
  view: [number,number] = [700, 250];
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Mes';
  showYAxisLabel = true;
  yAxisLabel = 'Ganancia';
  color = 'cool';

  constructor() {
    Object.assign(this, { single });
  }

  ngOnInit(): void {
  }
  onSelect(event:any) {
    console.log(event);
  }
}
