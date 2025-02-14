import {
  Camera,
  Photo,
  ImageOptions,
  CameraResultType,
} from '@capacitor/camera';

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
  await Camera.getPhoto({ resultType: CameraResultType.Uri });
}

export default new CameraPlugin();
