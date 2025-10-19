import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-top-menu-nave-bar',
  standalone: false,
  templateUrl: './top-menu-nave-bar.html',
  styleUrl: './top-menu-nave-bar.scss',
})
export class TopMenuNaveBar implements OnInit {
  @Output() onToggleSideMenu: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  items: MenuItem[] | undefined;

  toggleSideMenu() {
    this.onToggleSideMenu.emit();
  }

  ngOnInit() {
    this.items = [
      {
        label: 'خروج',
        icon: 'pi pi-search',
        command: () => {
          this.logout();
        },
      },
    ];
  }

  logout() {}
}
