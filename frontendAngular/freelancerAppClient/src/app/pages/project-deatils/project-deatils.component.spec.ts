import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDeatilsComponent } from './project-deatils.component';

describe('ProjectDeatilsComponent', () => {
  let component: ProjectDeatilsComponent;
  let fixture: ComponentFixture<ProjectDeatilsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectDeatilsComponent]
    });
    fixture = TestBed.createComponent(ProjectDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
