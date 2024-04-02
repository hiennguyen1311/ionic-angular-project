import { GalleryImageOptions, GalleryPhotos, Camera } from '@capacitor/camera';

class ImagePicker {
  pickImages(options: GalleryImageOptions): Promise<GalleryPhotos> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await Camera.pickImages(options);
        resolve(result);
      } catch (e) {
        reject(e);
      }
    });
  }
}

export default new ImagePicker();
