import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextRecongitionPage } from './text-recongition.page';

describe('TextRecongitionPage', () => {
  let component: TextRecongitionPage;
  let fixture: ComponentFixture<TextRecongitionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TextRecongitionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
