import { Component } from '@angular/core';
import { DashboardHeaderComponent } from './components/dashboard-header';
import { MetricsGridComponent } from './components/metrics-grid';
import { AnalyticsChartComponent } from './components/analytics-chart';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DashboardHeaderComponent, MetricsGridComponent, AnalyticsChartComponent],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent {
metrics = [
  { label: 'Total de Usuários',   value: 2847,  delta: '+12% em relação ao mês anterior' },
  { label: 'Total de Likes',      value: 18459, delta: '+23% em relação ao mês anterior' },
  { label: 'Posts Publicados',    value: 1243,  delta: '+15% em relação ao mês anterior' },
  { label: 'Taxa de Engajamento', value: '4.8%', delta: '+0.3% em relação ao mês anterior' }
];


}
