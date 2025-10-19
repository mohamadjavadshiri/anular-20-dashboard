export class NaveItem {
  id: string;
  title: string;
  toolTip: string;
  icon: string;
  isShow: boolean;
  order: number;
  children: NaveItem[];
  parentId: string;
  url: string;

  isShowChildren: boolean;

  constructor(data: any = {}) {
    this.id = data.id;
    this.title = data.title;
    this.toolTip = data.toolTip;
    this.icon = data.icon;
    this.isShow = data.isShow || true;
    this.order = data.order || 999;
    this.children = data.children || [];
    this.parentId = data.parentId || null;
    this.url = data.url;
    
    this.isShowChildren = false;
  }
}
