import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeContentPage } from './home-content.page';

describe('HomeContentPage', () => {
  let component: HomeContentPage;
  let fixture: ComponentFixture<HomeContentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
