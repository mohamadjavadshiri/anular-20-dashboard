import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenu } from './compoents/side-menu/side-menu';
import { CardModule } from 'primeng/card';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { SideMenuTree } from './compoents/side-menu-tree/side-menu-tree';
import { SideMenuTreeLoop } from './compoents/side-menu-tree/side-menu-tree-loop/side-menu-tree-loop';
import { TopMenuNaveBar } from './compoents/top-menu-nave-bar/top-menu-nave-bar';
import { MenuModule } from 'primeng/menu';

@NgModule({
  declarations: [SideMenu,SideMenuTree,SideMenuTreeLoop,TopMenuNaveBar],
  imports: [
    CommonModule,
    CardModule,
    ToggleSwitchModule,
    MenuModule
  ],
  exports:[SideMenu,TopMenuNaveBar]
})
export class LayoutModule { }
