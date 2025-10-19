import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    NotFoundPageComponent
  ],
  imports: [
    CommonModule,
    CardModule
  ],
  exports:[NotFoundPageComponent]
})
export class NotFoundPageModule { }
