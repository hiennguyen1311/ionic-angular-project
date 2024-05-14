import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreManagerPage } from './store-manager.page';

describe('StoreManagerPage', () => {
  let component: StoreManagerPage;
  let fixture: ComponentFixture<StoreManagerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StoreManagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
