import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html'
})
export class SkillsComponent {
  activeFilter: 'arch' | 'dev' | 'office' | 'courses' = 'arch';

  archSkills = [
    { name: 'Revit', icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' },
    { name: 'ArchiCAD', icon: 'M4 4h16v16H4V4zm2 2v12h12V6H6z' },
    { name: 'SketchUp', icon: 'M12 22L2 12V2h10l10 10v10z' },
    { name: 'AutoCAD', icon: 'M3 3h18v18H3V3zm16 16V5H5v14h14z' },
    { name: 'V-Ray', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z' },
    { name: 'Enscape', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-12H9v8h6V8zm-2 6h-2v-4h2v4z' },
    { name: 'Lumion', icon: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM8 10h8v4H8z' }
  ];

  devSkills = {
    frontend: [
      { name: 'Angular', icon: 'M12 2L2 7l10 5 10-5-10-5z' },
      { name: 'JavaScript', icon: 'M2 2h20v20H2z' },
      { name: 'TypeScript', icon: 'M3 3h18v18H3z' },
      { name: 'Tailwind CSS', icon: 'M12 2L2 7l10 5 10-5z' },
      { name: 'HTML5', icon: 'M3 3h18v18H3z' },
      { name: 'CSS3', icon: 'M3 3h18v18H3z' }
    ],
    backend: [
      { name: 'PHP', icon: 'M2 2h20v20H2z' },
      { name: 'Laravel', icon: 'M3 3h18v18H3z' },
      { name: 'Node.js', icon: 'M12 2L2 7l10 5 10-5-10-5z' },
      { name: 'MySQL', icon: 'M3 3h18v18H3z' },
      { name: 'Firebase', icon: 'M12 2L2 7l10 5 10-5z' }
    ],
    tools: [
      { name: 'Git', icon: 'M12 2L2 7l10 5 10-5-10-5z' },
      { name: 'GitHub', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z' },
      { name: 'VS Code', icon: 'M3 3h18v18H3z' },
      { name: 'Figma', icon: 'M12 2L2 7l10 5 10-5z' }
    ]
  };

  officeSkills = {
    microsoft: [
      { name: 'Excel (Fórmulas avanzadas/macros base)', icon: 'M3 3h18v18H3z' },
      { name: 'Word', icon: 'M3 3h18v18H3z' },
      { name: 'PowerPoint', icon: 'M3 3h18v18H3z' }
    ],
    google: [
      { name: 'Docs', icon: 'M3 3h18v18H3z' },
      { name: 'Sheets', icon: 'M3 3h18v18H3z' },
      { name: 'Slides', icon: 'M3 3h18v18H3z' },
      { name: 'Drive (Gestión en la nube)', icon: 'M12 2L2 7l10 5 10-5z' }
    ]
  };

  universityDegree = {
    title: 'Técnico Superior Programador (UTN/IES)',
    image: 'assets/images/certificates/cert-uni.jpg'
  };

  courseSkills = [
    { 
      title: 'Curso Intensivo Modelado 3D de Arquitectura con IA (Guido Asplanatti)', 
      image: 'assets/images/certificates/cert-1.jpg' 
    },
    { 
      title: 'Fundamentos de Metodología BIM 2.0 (Instituto de Arquitectura)', 
      image: 'assets/images/certificates/cert-2.jpg' 
    },
    { 
      title: 'Curso de Visualización Arquitectónica con V-Ray/Unreal', 
      image: 'assets/images/certificates/cert-3.jpg' 
    }
  ];

  setFilter(filter: 'arch' | 'dev' | 'office' | 'courses') {
    this.activeFilter = filter;
  }
}
