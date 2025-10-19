import { Component, HostListener, OnInit } from '@angular/core';
import { useTheme } from '@primeuix/themes';

@Component({
  selector: 'app-master-page',
  standalone: false,
  templateUrl: './master-page.html',
  styleUrl: './master-page.scss',
})
export class MasterPage implements OnInit {
  isShowSideMenu = true;
  isMobile = false;

  ngOnInit(): void {
        this.handleMobileSize();
  }

  onToggleSideMenu(event: any) {
    this.isShowSideMenu = !this.isShowSideMenu;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.handleMobileSize();
  }

  handleMobileSize() {
    if (window.innerWidth < 600) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }
}
