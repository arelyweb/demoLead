import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-como-funciona',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './como-funciona.html',
  styleUrl: './como-funciona.css',
})
export class ComoFunciona {
   steps = [
    {
      title: 'Crea tu formulario',
      description: 'Diseña formularios personalizados sin tocar código. Arrastra, suelta y personaliza.',
      examples: ['Campos personalizados', 'Validación automática', 'Temas predefinidos']
    },
    {
      title: 'Publica en segundos',
      description: 'Obtén un enlace compartible o incrustra el formulario en tu sitio web.',
      examples: ['Código embebible', 'Enlace directo', 'Integración API']
    },
    {
      title: 'Convierte y crece',
      description: 'Recibe leads en tiempo real y automatiza el seguimiento con tus herramientas.',
      examples: ['Notificaciones instantáneas', 'Automatizaciones', 'Reportes avanzados']
    }
  ];
}
