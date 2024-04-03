import { Component, OnInit } from '@angular/core';
import { Encoding, Filesystem } from '@capacitor/filesystem';
import camera, { CameraResultType } from '@plugins/Camera/camera';
import imagePicker from '@plugins/ImagePlugin/ImagePicker';
import MLKitPlugins from '@plugins/MLKit/MLKitPlugins';

@Component({
  selector: 'app-text-recongition',
  templateUrl: './text-recongition.page.html',
  styleUrls: ['./text-recongition.page.scss'],
})
export class TextRecongitionPage implements OnInit {
  public image = '';
  public imagePath = '';
  public disableAnalyze = true;
  public base64 = '';
  public loading = false;
  text = '';
  constructor() {}

  ngOnInit() {}

  async selectImage() {
    try {
      const files = await imagePicker.pickImages({ limit: 1 });
      const file = files.photos[0];
      if (file && file.path) {
        this.image = file.webPath;
        this.imagePath = String(file.path || '');
        this.disableAnalyze = false;
        console.log(file);
      }
    } catch (e) {}
  }

  async analyzeImage() {
    try {
      this.loading = true;
      const contents = await Filesystem.readFile({
        path: this.imagePath,
      });
      const base64 = String(contents.data);
      this.base64 = base64;
      const text = await MLKitPlugins.analyze(base64);
      this.text = text;
      this.loading = false;
      this.disableAnalyze = true;
    } catch (e) {
      this.loading = false;
    }
  }

  async capture() {
    try {
      const { webPath, path } = await camera.capture({
        resultType: CameraResultType.Uri,
        presentationStyle: 'fullscreen',
        promptLabelCancel: 'Cancel',
      });
      if (webPath && path) {
        this.image = webPath;
        this.imagePath = path;
        this.disableAnalyze = false;
      }
    } catch (e) {}
  }
}
