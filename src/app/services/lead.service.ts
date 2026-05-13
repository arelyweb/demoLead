import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LeadService {
  private api = 'https://webleaddemo.onrender.com/api/leads';

  constructor(private http: HttpClient) {}

  getLeads() {
    return this.http.get(this.api);
  }

  createLead(data: any) {
    return this.http.post(this.api, data);
  }
}