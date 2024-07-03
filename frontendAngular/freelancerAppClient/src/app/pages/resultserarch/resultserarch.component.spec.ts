import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultserarchComponent } from './resultserarch.component';

describe('ResultserarchComponent', () => {
  let component: ResultserarchComponent;
  let fixture: ComponentFixture<ResultserarchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultserarchComponent]
    });
    fixture = TestBed.createComponent(ResultserarchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
