import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZorroDatabaseComponent } from './zorro-database.component';

describe('ZorroDatabaseComponent', () => {
  let component: ZorroDatabaseComponent;
  let fixture: ComponentFixture<ZorroDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZorroDatabaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZorroDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
