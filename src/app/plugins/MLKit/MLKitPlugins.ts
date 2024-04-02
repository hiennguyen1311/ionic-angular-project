import { registerPlugin } from '@capacitor/core';

export interface MLKitInterface {
  init(options: { value: string }): Promise<{ value: string }>;
  analyze(options: { image: string }): Promise<{ data: string }>;
}

export * from './definitions';
import type { BarcodeScannerPlugin } from './definitions';
const MLKit = registerPlugin<MLKitInterface>('MLKitPlugin');
export const BarcodeScanner = registerPlugin<BarcodeScannerPlugin>(
  'BarcodeScanner',
  {
    web: () =>
      import('./BarcodeScannerWeb').then((m) => new m.BarcodeScannerWeb()),
  }
);

class MLKiPlugin {
  async init(value: string) {
    MLKit.init({ value });
  }

  async analyze(image: string) {
    try {
      const result = await MLKit.analyze({ image });
      let { data } = result;
      return data;
    } catch (e) {
      return '!!Error!!';
    }
  }

  async scan() {
    return new Promise(async (resolve) => {
      document.querySelector('body')?.classList.add('barcode-scanner-active');
      document.querySelector('back')?.classList.add('btn-back-button-show');

      const listener = await BarcodeScanner.addListener(
        'barcodeScanned',
        async (result) => {
          await listener.remove();
          document
            .querySelector('body')
            ?.classList.remove('barcode-scanner-active');
          await BarcodeScanner.stopScan();
          resolve(result.barcode);
        }
      );

      await BarcodeScanner.startScan();
    });
  }
}

export default new MLKiPlugin();
