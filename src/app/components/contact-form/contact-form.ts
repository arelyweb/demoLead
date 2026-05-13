import { Component } from '@angular/core';
import { LeadService } from '../../services/lead.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export class ContactForm {

   lead = { name: '', phone: '', message: '' };

  constructor(private service: LeadService) {}

  send() {
    this.service.createLead(this.lead).subscribe(() => {
      alert('Mensaje enviado');
      this.lead = { name: '', phone: '', message: '' };
    });
  }
}
