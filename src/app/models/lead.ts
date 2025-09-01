export type LeadStatus = 'new'|'qualified'|'won'|'lost';

export interface Lead {
  id: string;
  name: string;
  email?: string;
  company?: string;
  status: LeadStatus;
  createdAt: string; // ISO
}
