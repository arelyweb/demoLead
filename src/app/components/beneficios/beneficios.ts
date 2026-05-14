import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-beneficios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './beneficios.html',
  styleUrl: './beneficios.css',
})
export class Beneficios {
  benefits = [
    {
      title: 'Formularios instantáneos',
      description: 'Crea formularios hermosos sin codificar. Personalización completa en segundos.',
      icon: `<path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>`
    },
    {
      title: 'Análisis en tiempo real',
      description: 'Monitorea cada interacción. Datos precisos y actualizados al instante.',
      icon: `<path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>`
    },
    {
      title: 'Integración total',
      description: 'Conecta con tus herramientas favoritas. API potente y webhooks incluidos.',
      icon: `<path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>`
    },
    {
      title: 'Seguridad premium',
      description: 'Encriptación de nivel empresarial. GDPR y SOC 2 completamente cumplido.',
      icon: `<path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>`
    },
    {
      title: 'Soporte 24/7',
      description: 'Equipo experto siempre disponible. Respuestas rápidas en español.',
      icon: `<path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>`
    },
    {
      title: 'Escalable infinito',
      description: 'Crece sin límites. Infraestructura diseñada para millones de leads.',
      icon: `<path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>`
    }
  ];
}
