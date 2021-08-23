import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDatabaseComponent } from './ngx-database.component';

describe('NgxDatabaseComponent', () => {
  let component: NgxDatabaseComponent;
  let fixture: ComponentFixture<NgxDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxDatabaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
