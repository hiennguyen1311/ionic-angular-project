import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiComponentPage } from './ui-component.page';

describe('UiComponentPage', () => {
  let component: UiComponentPage;
  let fixture: ComponentFixture<UiComponentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UiComponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
