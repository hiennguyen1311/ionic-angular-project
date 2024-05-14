import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KeyboardPage } from './keyboard.page';

describe('KeyboardPage', () => {
  let component: KeyboardPage;
  let fixture: ComponentFixture<KeyboardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(KeyboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
