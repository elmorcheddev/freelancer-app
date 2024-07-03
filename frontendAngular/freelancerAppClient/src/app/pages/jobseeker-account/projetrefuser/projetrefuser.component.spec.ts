import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetrefuserComponent } from './projetrefuser.component';

describe('ProjetrefuserComponent', () => {
  let component: ProjetrefuserComponent;
  let fixture: ComponentFixture<ProjetrefuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjetrefuserComponent]
    });
    fixture = TestBed.createComponent(ProjetrefuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
