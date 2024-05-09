import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from '@services/auth/auth.service';
import { LanguageService } from '@services/language/language.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private storage: Storage,
    private Language: LanguageService,
    private authService: AuthService
  ) {}

  async ngOnInit() {
    await this.authService.init();
    await this.storage.create();
    await this.Language.init();
  }
}
