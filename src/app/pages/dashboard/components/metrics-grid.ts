// src/app/pages/dashboard/components/metrics-grid.ts
import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

type Metric = { label: string; value: string | number; delta?: string };

@Component({
  selector: 'app-metrics-grid',
  standalone: true,
  imports: [NgFor, NgIf],
  template: `
  <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
    <div *ngFor="let m of metrics" class="rounded-2xl border bg-card p-5">
      <p class="text-sm text-muted-foreground">{{ m.label }}</p>
      <p class="mt-2 text-2xl font-semibold">{{ m.value }}</p>
      <p *ngIf="m.delta" class="mt-1 text-xs text-success">{{ m.delta }}</p>
    </div>
  </div>
  `
})
export class MetricsGridComponent {
  @Input() metrics: Metric[] = [];
}
