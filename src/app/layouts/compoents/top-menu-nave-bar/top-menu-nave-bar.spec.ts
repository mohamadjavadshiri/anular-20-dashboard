import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMenuNaveBar } from './top-menu-nave-bar';

describe('TopMenuNaveBar', () => {
  let component: TopMenuNaveBar;
  let fixture: ComponentFixture<TopMenuNaveBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopMenuNaveBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopMenuNaveBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
