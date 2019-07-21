import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsamComponent } from './inputsam.component';

describe('InputsamComponent', () => {
  let component: InputsamComponent;
  let fixture: ComponentFixture<InputsamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputsamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputsamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
