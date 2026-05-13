import { Routes } from '@angular/router';
import { ContactForm } from './components/contact-form/contact-form';
import { AdminPanel } from './components/admin-panel/admin-panel';
import { Home } from './components/home/home';

export const routes: Routes = [
 //ruta de contacto
    { path: 'contact', component: ContactForm },
 //ruta de admin
    { path: 'panel', component: AdminPanel },
 //ruta de home
    { path: '', component: Home }
];
