import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NativeApiPage } from './native-api.page';

describe('NativeApiPage', () => {
  let component: NativeApiPage;
  let fixture: ComponentFixture<NativeApiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NativeApiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
