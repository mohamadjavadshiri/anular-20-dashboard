import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterPage } from './view/master-page/master-page';
import { RouterOutlet } from '@angular/router';
import { LayoutModule } from '../layouts/layout-module';
import { DrawerModule } from 'primeng/drawer';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [MasterPage],
  imports: [CommonModule, RouterOutlet,LayoutModule,DrawerModule,ToastModule],

  exports: [MasterPage],
})
export class MasterPageModule {}
