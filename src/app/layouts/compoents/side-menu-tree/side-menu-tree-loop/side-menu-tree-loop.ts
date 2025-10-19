import { Component, Input, OnInit } from '@angular/core';
import { NaveItem } from '../../../../BaseModels/NaveITem.model';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-side-menu-tree-loop',
  standalone: false,
  templateUrl: './side-menu-tree-loop.html',
  styleUrl: './side-menu-tree-loop.scss',
})
export class SideMenuTreeLoop implements OnInit {
  @Input() NaveTree: NaveItem = new NaveItem();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClickNaveITem(naveItem: NaveItem) {
    naveItem.isShowChildren = !naveItem.isShowChildren;
    if (naveItem.url) {
      this.router.navigate([naveItem.url]);
    }
  }
}
