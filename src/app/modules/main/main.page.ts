import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationState } from '@models/store.interface';
import { AuthService } from '@services/auth/auth.service';
import { LOCAL_STORAGE } from '@constant/enum';
import localStorage from '@plugins/LocalStorage/localStorage';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  token = '';
  loading = true;
  constructor(private router: Router, private authService: AuthService) {
    localStorage.get({ key: LOCAL_STORAGE.TOKEN }).then((data) => {
      if (data.value) {
        this.token = data.value || '';
        this.loginSuccess();
      } else {
        this.loginFailure();
      }
    });
  }

  loginSuccess() {
    this.loading = false;
    setTimeout(() => this.router.navigate(['/home']), 200);
  }

  loginFailure() {
    this.loading = false;
    setTimeout(() => this.router.navigate(['/login']), 200);
  }

  ngOnInit() {}
}
