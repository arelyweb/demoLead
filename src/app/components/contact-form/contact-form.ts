import { Component } from '@angular/core';
import { LeadService } from '../../services/lead.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
  standalone: true,
})
export class ContactForm {

   lead = { name: '', phone: '', message: '' };
  contactForm: FormGroup;
  isLoading = false;
  submitSuccess = false;

  constructor(private service: LeadService, private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['',  [Validators.required, Validators.minLength(2)]],
      phone: ['', Validators.required],
      message: ['',  [Validators.required, Validators.minLength(5)]]
    });
  }

  send() {
    this.service.createLead(this.lead).subscribe(() => {
      alert('Mensaje enviado');
      this.lead = { name: '', phone: '', message: '' };
    });
  }
  onSubmit() {
    if (this.contactForm.valid) {
      this.isLoading = true;
      this.lead = this.contactForm.value;
      this.service.createLead(this.lead).subscribe({
        next: () => {
          console.log('Lead enviado:', this.lead);
          this.isLoading = false;
          this.submitSuccess = true;
          this.contactForm.reset();
          setTimeout(() => {
            this.submitSuccess = false;
          }, 5000);
        },
        error: (err) => {
          console.error('Error al enviar el lead:', err);
          this.isLoading = false;
        }
      });
      // Simular envío
      // setTimeout(() => {
      //   this.isLoading = false;
      //   this.submitSuccess = true;
      //   this.contactForm.reset();
      //   setTimeout(() => {
      //     this.submitSuccess = false;
      //   }, 5000);
      // }, 1500);
    }
  }
}
