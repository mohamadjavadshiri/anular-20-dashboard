import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceUnavailableComponent } from './service-unavailable/service-unavailable.component';

@NgModule({
  declarations: [ServiceUnavailableComponent],
  imports: [CommonModule],
  exports: [ServiceUnavailableComponent],
})
export class ServiceUnavailablePageModule {}
