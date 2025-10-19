import { Component } from '@angular/core';
import { ToastService } from '../../../../services/toast-service';
import { ToastModel } from '../../../../BaseModels/toast.model';

@Component({
  selector: 'app-dashboard-view',
  standalone: false,
  templateUrl: './dashboard-view.html',
  styleUrl: './dashboard-view.scss',
})
export class DashboardView {
  constructor(private toastService: ToastService) {}

  showMessage() {
  
    this.toastService.show(
      new ToastModel({
        Type:"success",
        Title: 'سلام',
        Message: 'من خوبم',
      })
    );
  }
}
