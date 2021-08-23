import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDatabaseComponent } from './ng-database.component';

describe('NgDatabaseComponent', () => {
  let component: NgDatabaseComponent;
  let fixture: ComponentFixture<NgDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgDatabaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
