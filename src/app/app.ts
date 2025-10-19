import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MasterPageModule } from './master-page/master-page-module';
import { ToastService } from './services/toast-service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MasterPageModule],
  providers:[ToastService,MessageService],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('DashboardTemplate');


}
