import { Component, OnInit } from '@angular/core';
import { NaveITems } from '../../../configs/NaveITems';
import { NaveItem } from '../../../BaseModels/NaveITem.model';

@Component({
  selector: 'app-side-menu-tree',
  standalone: false,
  templateUrl: './side-menu-tree.html',
  styleUrl: './side-menu-tree.scss',
})
export class SideMenuTree implements OnInit {
  NaveTree: NaveItem[] = [];
  isLoadedNaveTree = false;
  constructor() {}

  ngOnInit(): void {
    this.NaveTree = this.getTreeNave(NaveITems);
    this.isLoadedNaveTree=true;
  }

  getTreeNave(naveItems: NaveItem[] | any) {
    let naveItemsList = [];
    let lastReuslt = [];

    for (let naveITem of naveItems) {
      naveItemsList.push(new NaveItem(naveITem));
    }
    naveItemsList.sort((a, b) => a.order - b.order);
    let parentNodes = naveItemsList.filter((item) => item.parentId == null);
    for (let item of parentNodes) {
      let children = naveItemsList.filter((nave) => nave.parentId == item.id);
      item.children = children || [];
      lastReuslt.push(item);
    }
    return lastReuslt;
  }
}
