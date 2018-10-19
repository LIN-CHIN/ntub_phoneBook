import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPhoneBookComponent } from './index-phone-book.component';

describe('IndexPhoneBookComponent', () => {
  let component: IndexPhoneBookComponent;
  let fixture: ComponentFixture<IndexPhoneBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexPhoneBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexPhoneBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
