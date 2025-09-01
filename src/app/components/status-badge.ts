// src/app/components/status-badge.ts
import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common'; // ⬅️ importe

@Component({
  selector: 'app-status-badge',
  standalone: true,
  imports: [NgClass],                        // ⬅️ adicione
  template: `
  <span class="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium"
        [ngClass]="classes[status]">
    <span class="h-2 w-2 rounded-full" [ngClass]="dots[status]"></span>{{ status }}
  </span>
  `,
})
export class StatusBadgeComponent {
  @Input() status!: 'new'|'qualified'|'won'|'lost';
  classes = {
    new: 'bg-secondary text-primary',
    qualified: 'bg-blue-50 text-blue-700',
    won: 'bg-green-50 text-green-700',
    lost: 'bg-red-50 text-red-700',
  } as const;
  dots = {
    new: 'bg-primary',
    qualified: 'bg-blue-500',
    won: 'bg-green-500',
    lost: 'bg-red-500',
  } as const;
}
