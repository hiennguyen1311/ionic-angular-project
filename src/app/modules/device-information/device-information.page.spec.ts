import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeviceInformationPage } from './device-information.page';

describe('DeviceInformationPage', () => {
  let component: DeviceInformationPage;
  let fixture: ComponentFixture<DeviceInformationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DeviceInformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
