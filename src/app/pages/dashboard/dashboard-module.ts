import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DashboardView } from './view/dashboard-view/dashboard-view';
import { RouterModule, Routes } from '@angular/router';
import { SampleDataTable } from './components/sample-data-table/sample-data-table';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';


export const routes: Routes = [
  {
    path: '',
    component: DashboardView,
  },
];

@NgModule({
  declarations: [DashboardView, SampleDataTable],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    RouterModule.forChild(routes),
  ],
})
export class DashboardModule {}
