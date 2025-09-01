import { Component } from '@angular/core';

@Component({
  selector: 'ui-card',
  standalone: true,
  template: `<div class="rounded-2xl border shadow-[var(--metric-card-shadow)] bg-card text-card-foreground p-5">
    <ng-content></ng-content>
  </div>`
})
export class UiCardComponent {}
