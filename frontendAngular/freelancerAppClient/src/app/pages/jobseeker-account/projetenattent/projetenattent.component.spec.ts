import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetenattentComponent } from './projetenattent.component';

describe('ProjetenattentComponent', () => {
  let component: ProjetenattentComponent;
  let fixture: ComponentFixture<ProjetenattentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjetenattentComponent]
    });
    fixture = TestBed.createComponent(ProjetenattentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
