export class ToastModel {
  Type: 'success' | 'info' | 'warn' | 'error' | 'contrast' | 'secondary';
  Title: string;
  Message: string;

  constructor(data: any = {}) {
    this.Type = data.Type || 'info';
    this.Title = data.Title || '';
    this.Message = data.Message || '';
  }

  getToastMappedModel() {
    let object = {
      severity: this.Type,
      summary: this.Title,
      detail: this.Message,
      life: 3000,
    };
    return object
  }
}
