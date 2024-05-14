import { Component, OnInit } from '@angular/core';
import { Keyboard, KeyboardResize, KeyboardStyle } from '@capacitor/keyboard';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.page.html',
  styleUrls: ['./keyboard.page.scss'],
})
export class KeyboardPage implements OnInit {
  keyboardHeight = 0;
  status = 'hide';
  visibleAcessory = true;
  scroll = true;
  style = KeyboardStyle.Light;
  resizeMode = KeyboardResize.None;
  buttons = [
    {
      title: 'Show',
      click: () => Keyboard.show(),
    },
    {
      title: 'Hide',
      click: () => Keyboard.hide(),
    },
    {
      title: 'Set Accessory Visible',
      click: () => {
        this.visibleAcessory = !this.visibleAcessory;
        Keyboard.setAccessoryBarVisible({ isVisible: this.visibleAcessory });
      },
    },
    {
      title: 'Set Scroll',
      click: () => {
        this.scroll = !this.scroll;
        Keyboard.setScroll({ isDisabled: !this.scroll });
      },
    },
    {
      title: 'Set Style',
      click: () => {
        this.style =
          this.style === KeyboardStyle.Dark
            ? KeyboardStyle.Light
            : KeyboardStyle.Dark;
        Keyboard.setStyle({ style: this.style });
      },
    },
    {
      title: 'Set resize mode',
      click: () => {
        this.resizeMode = KeyboardResize.Native;
        Keyboard.setResizeMode({ mode: this.resizeMode });
      },
    },
  ];
  constructor() {}

  ngOnInit() {
    Keyboard.addListener('keyboardWillShow', (info) => {
      this.status = 'showing';
    });

    Keyboard.addListener('keyboardDidShow', (info) => {
      this.status = 'show';
      this.keyboardHeight = info.keyboardHeight;
    });

    Keyboard.addListener('keyboardWillHide', () => {
      this.status = 'hiding';
    });

    Keyboard.addListener('keyboardDidHide', () => {
      this.status = 'hide';
      this.keyboardHeight = 0;
    });
  }
}
