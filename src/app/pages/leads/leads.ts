// src/app/pages/leads/leads.ts
import { Component, OnInit, computed, signal } from '@angular/core';
import { NgFor, NgIf, DatePipe } from '@angular/common';
import { LeadsService } from '../../core/leads.service';
import { StatusBadgeComponent } from '../../components/status-badge';
import { LeadStatus } from '../../models/lead';

@Component({
  selector: 'app-leads',
  standalone: true,
  imports: [NgFor, NgIf, DatePipe, StatusBadgeComponent],
  templateUrl: './leads.html',
  styleUrls: ['./leads.css']
})
export class LeadsComponent implements OnInit {
  q = signal('');
  status = signal<LeadStatus|'all'>('all');

  leads = computed(() => this.svc.filter({ q: this.q(), status: this.status() }));
  loading = computed(() => this.svc.loading());

  constructor(public svc: LeadsService) {}
  ngOnInit(): void { this.svc.fetch(); }

  onSearch(ev: Event) {
    const value = (ev.target as HTMLInputElement).value ?? '';
    this.q.set(value);
  }

  onStatusChange(ev: Event) {
    const value = (ev.target as HTMLSelectElement).value as LeadStatus|'all';
    this.status.set(value);
  }

  onExport() { this.svc.exportCsv(this.leads()); }
}
