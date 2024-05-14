import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiManagerPage } from './api-manager.page';

describe('ApiManagerPage', () => {
  let component: ApiManagerPage;
  let fixture: ComponentFixture<ApiManagerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ApiManagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
