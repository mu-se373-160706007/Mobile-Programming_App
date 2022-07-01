import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Genel', url: '/general', icon: 'earth' },
    { title: 'Gündemden', url: '/business', icon: 'videocam' },
    { title: 'Spor', url: '/sport', icon: 'basketball' },
    { title: 'Teknoloji', url: '/technology', icon: 'git-branch' },
    { title: 'Sağlık', url: '/health', icon: 'pulse' },
    { title: 'Bilim', url: '/science', icon: 'rocket' },
  ];
  constructor() {}
}
