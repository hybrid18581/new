import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KingslandingComponent } from './kingslanding.component';

describe('KingslandingComponent', () => {
  let component: KingslandingComponent;
  let fixture: ComponentFixture<KingslandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KingslandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KingslandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
