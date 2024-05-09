import { ActionSheet, ActionSheetButtonStyle } from '@capacitor/action-sheet';
import {
  Camera,
  Photo,
  ImageOptions,
  CameraResultType,
} from '@capacitor/camera';
import i18n from '@i18n/i18n';

export { CameraResultType } from '@capacitor/camera';

class CameraPlugin {
  capture(options: ImageOptions): Promise<Photo> {
    return new Promise(async (resolve, reject) => {
      try {
        const image = await Camera.getPhoto(options);
        resolve(image);
      } catch (e) {
        reject(e);
      }
    });
  }
}

export async function showOptions() {
  const result = await ActionSheet.showActions({
    title: i18n.t('CAMERA.TITLE'),
    message: i18n.t('CAMERA.MESSAGE'),
    options: [
      { title: i18n.t('CAMERA.OPEN_CAMERA') },
      { title: i18n.t('CAMERA.OPEN_LIBRARY') },
      {
        title: i18n.t('GLOBAL.CANCEL'),
        style: ActionSheetButtonStyle.Destructive,
      },
    ],
  });

  switch (result.index) {
    case 0: {
      const image = await Camera.getPhoto({ resultType: CameraResultType.Uri });
      return image;
    }
    case 1: {
      const image = await Camera.pickImages({});
      return image;
    }
    default: {
      return '';
    }
  }
}

export default new CameraPlugin();
