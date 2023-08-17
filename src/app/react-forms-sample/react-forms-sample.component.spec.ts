import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactFormsSampleComponent } from './react-forms-sample.component';

describe('ReactFormsSampleComponent', () => {
  let component: ReactFormsSampleComponent;
  let fixture: ComponentFixture<ReactFormsSampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactFormsSampleComponent]
    });
    fixture = TestBed.createComponent(ReactFormsSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
