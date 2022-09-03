import { Component, OnInit } from '@angular/core';
import { single } from './data';

@Component({
  selector: 'app-horizontalminus-chart',
  templateUrl: './horizontalminus-chart.component.html',
  styleUrls: ['./horizontalminus-chart.component.css']
})
export class HorizontalminusChartComponent implements OnInit {
  single: any = single;
  view: [number,number] = [600, 250];
   // options
   showXAxis: boolean = true;
   showYAxis: boolean = true;
   gradient: boolean = false;
   showLegend: boolean = false;
   showXAxisLabel: boolean = true;
   yAxisLabel: string = 'Producto';
   showYAxisLabel: boolean = true;
   xAxisLabel: string = 'Cantidad';
   color = 'cool';
  constructor() {
    Object.assign(this, { single });
  }

  ngOnInit(): void {
  }
  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
