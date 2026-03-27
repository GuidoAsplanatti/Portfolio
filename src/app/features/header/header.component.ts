import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  themeService = inject(ThemeService);
  // translate = inject(TranslateService);

  constructor() {
    // this.translate.addLangs(['en', 'es']);
    // this.translate.setDefaultLang('en');
    
    // Initialize language from local storage
    if (typeof window !== 'undefined' && localStorage) {
       // const browserLang = localStorage.getItem('lang') || this.translate.getBrowserLang();
       // const langToUse = browserLang?.match(/en|es/) ? browserLang : 'en';
       // this.translate.use(langToUse);
    }
  }

  toggleTheme() {
    this.themeService.toggleDarkMode();
  }

  toggleLanguage() {
    /*
    const current = this.translate.currentLang;
    const next = current === 'en' ? 'es' : 'en';
    this.translate.use(next);
    if (typeof window !== 'undefined' && localStorage) {
       localStorage.setItem('lang', next);
    }
    */
  }
}
