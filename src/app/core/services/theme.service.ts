import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkModeSub = new BehaviorSubject<boolean>(false);
  isDarkMode$ = this.darkModeSub.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme === 'dark') {
        this.setDarkMode(true);
      } else {
        this.setDarkMode(false);
      }
    }
  }

  setDarkMode(isDark: boolean) {
    this.darkModeSub.next(isDark);
    if (isPlatformBrowser(this.platformId)) {
      if (isDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  }

  toggleDarkMode() {
    this.setDarkMode(!this.darkModeSub.value);
  }
}
