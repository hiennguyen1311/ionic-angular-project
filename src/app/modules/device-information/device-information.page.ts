import { Component, OnInit } from '@angular/core';
import { Clipboard, Toast } from '@plugins';
import { Device } from '@capacitor/device';
import { get } from '@utils/util';
import i18n from '@i18n/i18n';

@Component({
  selector: 'app-device-information',
  templateUrl: './device-information.page.html',
  styleUrls: ['./device-information.page.scss'],
})
export class DeviceInformationPage implements OnInit {
  battery = 0;
  isCharging = false;
  id = '';
  info: { title: string; value: string }[] = [];
  langCode = '';
  langTag = '';
  constructor() {}

  ngOnInit() {
    Device.getBatteryInfo().then((value) => {
      this.battery = value.batteryLevel || 0;
      this.isCharging = value.isCharging || false;
    });
    Device.getId().then((value) => (this.id = value.identifier));
    Device.getInfo().then(
      (value) =>
        (this.info = Object.keys(value).map((i) => ({
          title: i,
          value: get(value, i, ''),
        })))
    );
    Device.getLanguageCode().then((value) => (this.langCode = value.value));
    Device.getLanguageTag().then((value) => (this.langCode = value.value));
  }

  async copy(value: any) {
    await Clipboard.write({ string: String(value) });
    Toast.show({ text: i18n.t('GLOBAL.COPIED') });
  }
}
