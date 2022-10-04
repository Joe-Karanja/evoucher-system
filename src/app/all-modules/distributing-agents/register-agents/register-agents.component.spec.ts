import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAgentsComponent } from './register-agents.component';

describe('RegisterAgentsComponent', () => {
  let component: RegisterAgentsComponent;
  let fixture: ComponentFixture<RegisterAgentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterAgentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
