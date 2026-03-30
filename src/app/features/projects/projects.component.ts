import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Plataforma de Gestión Inmobiliaria',
      description: 'Sistema integral para administrar propiedades, clientes y contratos. Desarrollado con enfoque en rendimiento y experiencia de usuario.',
      image: 'assets/images/projects/project-1.jpg',
      stack: ['Angular', 'Node.js', 'MongoDB']
    },
    {
      title: 'E-commerce para Construcción',
      description: 'Tienda en línea B2B para materiales de construcción con pasarela de pago integrada y sistema de facturación automática.',
      image: 'assets/images/projects/project-2.jpg',
      stack: ['React', 'PHP', 'MySQL']
    },
    {
      title: 'Dashboard Analítico',
      description: 'Panel de control interactivo para visualizar métricas de rendimiento en tiempo real utilizando gráficos dinámicos o D3.js.',
      image: 'assets/images/projects/project-3.jpg',
      stack: ['Vue.js', 'Tailwind', 'Firebase']
    }
  ];
}
