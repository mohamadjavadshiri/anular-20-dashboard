import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuTreeLoop } from './side-menu-tree-loop';

describe('SideMenuTreeLoop', () => {
  let component: SideMenuTreeLoop;
  let fixture: ComponentFixture<SideMenuTreeLoop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideMenuTreeLoop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideMenuTreeLoop);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
