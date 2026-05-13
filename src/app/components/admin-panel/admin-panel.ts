import { Component } from '@angular/core';
import { LeadService } from '../../services/lead.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-panel',
  imports: [FormsModule],
  templateUrl: './admin-panel.html',
  styleUrl: './admin-panel.css',
})
export class AdminPanel {
   leads: any[] = [];

  constructor(private service: LeadService) {}

  ngOnInit() {
    this.service.getLeads().subscribe((data: any) => {
      this.leads = data;
    });
  }
}
