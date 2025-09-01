import { Component } from '@angular/core';
import {
  NgApexchartsModule,
  ApexAxisChartSeries,
  ApexChart,
  ApexStroke,
  ApexDataLabels,
  ApexXAxis,
  ApexGrid,
  ApexFill,
  ApexYAxis,
  ApexTooltip
} from 'ng-apexcharts';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  template: `
    <apx-chart
      [series]="series"
      [chart]="chart"
      [stroke]="stroke"
      [dataLabels]="dataLabels"
      [xaxis]="xaxis"
      [yaxis]="yaxis"
      [grid]="grid"
      [fill]="fill"
      [colors]="colors"
      [tooltip]="tooltip"
    ></apx-chart>
  `
})
export class LineChartComponent {
  // dados só de exemplo
  series: ApexAxisChartSeries = [
    { name: 'Usuários', data: [1200, 1450, 1800, 1950, 2050, 2900] }
  ];

  // troquei para AREA para preencher e destacar a linha
  chart: ApexChart = {
    type: 'area',
    height: 360,
    toolbar: { show: false }
  };

  // linha mais grossa e suave
  stroke: ApexStroke = {
    curve: 'smooth',
    width: 3
  };

  dataLabels: ApexDataLabels = { enabled: false };

  xaxis: ApexXAxis = {
    categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun']
  };

  // força um range parecido com o layout e evita linha “sumida”
  yaxis: ApexYAxis = {
    min: 1000,
    max: 3000,
    tickAmount: 4
  };

  grid: ApexGrid = {
    borderColor: 'hsl(var(--border))',
    strokeDashArray: 3
  };

  // cor do traço/área — azul visível
  colors = ['#3B82F6']; // azul (Tailwind 'blue-500')

  // preenchimento mais presente
  fill: ApexFill = {
    type: 'gradient',
    gradient: {
      shadeIntensity: 0.25,
      opacityFrom: 0.45,
      opacityTo: 0.10,
      stops: [0, 90, 100]
    }
  };

  tooltip: ApexTooltip = {
    theme: 'light'
  };
}
