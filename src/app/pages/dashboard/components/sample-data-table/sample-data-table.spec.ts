import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleDataTable } from './sample-data-table';

describe('SampleDataTable', () => {
  let component: SampleDataTable;
  let fixture: ComponentFixture<SampleDataTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleDataTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleDataTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
