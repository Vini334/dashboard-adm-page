import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-header',
  standalone: true,
  template: `
  <div class="flex items-center justify-between">
    <div>
      <h1 class="text-2xl font-bold">Acompanhe as métricas</h1>
      <p class="text-sm text-muted-foreground">Atualize e exporte os dados quando precisar</p>
    </div>
    <div class="flex gap-2">
      <button class="px-3 py-2 rounded-lg border hover:bg-muted">Atualizar</button>
      <button class="px-3 py-2 rounded-lg bg-primary text-primary-foreground">Exportar</button>
    </div>
  </div>
  `
})
export class DashboardHeaderComponent {}
