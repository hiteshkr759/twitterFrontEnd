import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyPolicesComponent } from './privacy-polices.component';

describe('PrivacyPolicesComponent', () => {
  let component: PrivacyPolicesComponent;
  let fixture: ComponentFixture<PrivacyPolicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacyPolicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyPolicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
