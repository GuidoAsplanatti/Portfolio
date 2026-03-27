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
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      stack: ['Angular', 'Node.js', 'MongoDB']
    },
    {
      title: 'E-commerce para Construcción',
      description: 'Tienda en línea B2B para materiales de construcción con pasarela de pago integrada y sistema de facturación automática.',
      image: 'https://images.unsplash.com/photo-1541888081622-df89b96435c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      stack: ['React', 'PHP', 'MySQL']
    },
    {
      title: 'Dashboard Analítico',
      description: 'Panel de control interactivo para visualizar métricas de rendimiento en tiempo real utilizando gráficos dinámicos o D3.js.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      stack: ['Vue.js', 'Tailwind', 'Firebase']
    }
  ];
}
