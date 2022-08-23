import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  openDropdown = false;
  openHamburger = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDropdown() {
    this.openDropdown = !this.openDropdown;
  }

  toggleHamburger() {
    this.openHamburger = !this.openHamburger;
  }

}
