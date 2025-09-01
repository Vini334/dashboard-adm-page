import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lead, LeadStatus } from '../models/lead';

@Injectable({ providedIn: 'root' })
export class LeadsService {
  private readonly baseUrl = '/api';
  leads = signal<Lead[]>([]);
  loading = signal(false);

  constructor(private http: HttpClient) {}

  fetch() {
    this.loading.set(true);
    // troque por this.http.get<Lead[]>(`${this.baseUrl}/leads`)
    setTimeout(() => {
      this.leads.set([
        { id: '1', name: 'Empresa X', email: 'x@corp.com', company: 'Corp X', status: 'new',       createdAt: '2025-08-25' },
        { id: '2', name: 'Cliente Y', email: 'y@mail.com', company: 'Y Ltda', status: 'qualified', createdAt: '2025-08-24' },
        { id: '3', name: 'Startup Z', email: 'z@start.io', company: 'Start Z', status: 'won',      createdAt: '2025-08-23' },
        { id: '4', name: 'Beta Co',    email: 'beta@co.io', company: 'Beta Co', status: 'lost',     createdAt: '2025-08-22' },
      ]);
      this.loading.set(false);
    }, 300);
  }

  filter(params: { q?: string; status?: LeadStatus|'all' }) {
    const { q = '', status = 'all' } = params;
    const term = q.trim().toLowerCase();
    return this.leads().filter(l =>
      (status === 'all' || l.status === status) &&
      (term === '' ||
        l.name.toLowerCase().includes(term) ||
        (l.email ?? '').toLowerCase().includes(term) ||
        (l.company ?? '').toLowerCase().includes(term))
    );
  }

  exportCsv(rows: Lead[]) {
    const header = ['id','name','email','company','status','createdAt'];
    const body = rows.map(r => [r.id,r.name,r.email??'',r.company??'',r.status,r.createdAt]);
    const csv = [header, ...body].map(line => line.map(v => `"${String(v).replace(/"/g,'""')}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'leads.csv';
    a.click();
    URL.revokeObjectURL(a.href);
  }
}
