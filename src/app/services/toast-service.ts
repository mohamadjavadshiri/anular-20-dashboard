import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModel } from '../BaseModels/toast.model';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private messageService: MessageService) {}

  show(toast: ToastModel) {
    this.messageService.add(toast.getToastMappedModel());
  }
}
