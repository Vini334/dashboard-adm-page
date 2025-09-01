import { Component } from '@angular/core';
import { UiCardComponent } from '../../../components/ui-card';
import { LineChartComponent } from './line-chart';
import { BarChartComponent } from './bar-chart';

@Component({
  selector: 'app-analytics-chart',
  standalone: true,
  imports: [UiCardComponent, LineChartComponent, BarChartComponent],
  template: `
  <div class="grid lg:grid-cols-2 gap-6 auto-rows-fr">            <!-- auto-rows-fr iguala alturas -->
    <div class="h-full">
      <ui-card>
        <h3 class="text-lg font-semibold mb-1">Crescimento de Usuários</h3>
        <p class="text-sm text-muted-foreground mb-4">Últimos 6 meses</p>
        <app-line-chart />
      </ui-card>
    </div>

    <div class="h-full">
      <ui-card>
        <h3 class="text-lg font-semibold mb-1">Engajamento Semanal</h3>
        <p class="text-sm text-muted-foreground mb-4">Likes, comentários e compartilhamentos</p>
        <app-bar-chart />
      </ui-card>
    </div>
  </div>
  `
})
export class AnalyticsChartComponent {}
