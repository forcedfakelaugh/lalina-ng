import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isInRoute(navName: string) {
    if (window.location.pathname.endsWith('/') && navName === 'home'){
      return true;
    }

    return window.location.pathname.includes(navName);
  }

}
