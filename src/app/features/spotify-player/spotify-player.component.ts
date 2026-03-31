import { Component, OnInit, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spotify-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spotify-player.component.html',
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class SpotifyPlayerComponent implements OnInit {
  private sanitizer = inject(DomSanitizer);

  spotifyUrl!: SafeResourceUrl;
  isOpen = false;

  ngOnInit(): void {
    // Sanitize the Spotify Embed URL
    this.spotifyUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://open.spotify.com/embed/track/55uC77OAnKCi9RldNIjmvi?si=VEADupVlRxa6Tp3zLC-3bQ'
    );

    // Initial Greeting sequence
    setTimeout(() => {
      this.isOpen = true;

      // Auto-close after another 5 seconds
      setTimeout(() => {
        if (this.isOpen) {
          this.isOpen = false;
        }
      }, 5000);
    }, 5000);
  }

  togglePlayer(): void {
    this.isOpen = !this.isOpen;
  }

  closePlayer(): void {
    this.isOpen = false;
  }
}
