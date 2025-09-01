// src/app/pages/dashboard/components/bar-chart.ts
import { Component } from '@angular/core';
import {
  NgApexchartsModule,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexGrid,
  ApexPlotOptions
} from 'ng-apexcharts';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  template: `
    <apx-chart
      [series]="series"
      [chart]="chart"
      [plotOptions]="plotOptions"
      [xaxis]="xaxis"
      [grid]="grid"
    ></apx-chart>
  `
})
export class BarChartComponent {
  series: ApexAxisChartSeries = [
    { name: 'Interações', data: [820, 980, 260, 1280, 1450, 1200, 760] }
  ];

  chart: ApexChart = {
    type: 'bar',             // <- literal válido
    height: 360,
    toolbar: { show: false }
  };

  plotOptions: ApexPlotOptions = {
    bar: { borderRadius: 8, columnWidth: '45%' }
  };

  xaxis: ApexXAxis = { categories: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'] };

  grid: ApexGrid = { borderColor: 'hsl(var(--border))' };
}
