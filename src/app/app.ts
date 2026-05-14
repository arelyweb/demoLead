import { HttpClient } from '@angular/common/http';
import { Component, inject, Injectable, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Beneficios } from './components/beneficios/beneficios';
import { ComoFunciona } from './components/como-funciona/como-funciona';
import {ContactForm} from './components/contact-form/contact-form';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Hero, Beneficios, ComoFunciona, ContactForm, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
@Injectable({providedIn: 'root'})
export class App {
  private http = inject(HttpClient);
  protected readonly title = signal('demoLead');
}
