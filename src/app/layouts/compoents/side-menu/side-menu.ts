import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  standalone: false,
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.scss',
})
export class SideMenu {

  toggleDarkMode() {
    const element:any = document.querySelector('html');
    element.classList.toggle('my-app-dark');
  }
}
