import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetEncoursComponent } from './projet-encours.component';

describe('ProjetEncoursComponent', () => {
  let component: ProjetEncoursComponent;
  let fixture: ComponentFixture<ProjetEncoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjetEncoursComponent]
    });
    fixture = TestBed.createComponent(ProjetEncoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
