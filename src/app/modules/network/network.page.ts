import { Component, OnInit } from '@angular/core';
import { Network } from '@capacitor/network';
import { get } from '@utils/util';

@Component({
  selector: 'app-network',
  templateUrl: './network.page.html',
  styleUrls: ['./network.page.scss'],
})
export class NetworkPage implements OnInit {
  connectionType = '';
  connected = false;
  icons = {
    '': 'cloud-offline-sharp',
    wifi: 'wifi-sharp',
    cellular: 'cellular-sharp',
    true: 'cloud-done-sharp',
  };
  connectionIcon = '';
  connectedIcon = '';

  constructor() {}

  ngOnInit() {
    Network.getStatus().then((state) => {
      this.connectionType = state.connectionType;
      this.connected = state.connected;
      this.connectionIcon = get(this.icons, state.connectionType, '');
      this.connectedIcon = get(this.icons, String(state.connected), '');
    });
    Network.addListener('networkStatusChange', (state) => {
      this.connectionType = state.connectionType;
      this.connected = state.connected;
      this.connectionIcon = get(this.icons, state.connectionType, '');
      this.connectedIcon = get(this.icons, String(state.connected), '');
    });
  }
}
