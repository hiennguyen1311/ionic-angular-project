import { Component, OnInit } from '@angular/core';
import { ApplicationState } from '@models/store.interface';
import { Store, select } from '@ngrx/store';
import { FetchDataAppAction } from '@store/app/app.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-api-manager',
  templateUrl: './api-manager.page.html',
  styleUrls: ['./api-manager.page.scss'],
})
export class ApiManagerPage implements OnInit {
  public data = '';
  private data$: Observable<{}>;
  public loading = false;
  private loading$: Observable<boolean>;
  public isShowError = false;
  constructor(private store: Store<ApplicationState>) {
    this.data$ = this.store.pipe(select('app', 'data'));
    this.loading$ = this.store.pipe(select('app', 'loading'));
  }

  ngOnInit() {
    this.data$.subscribe((value) => (this.data = JSON.stringify(value)));
    this.loading$.subscribe((value) => (this.loading = value));
  }

  public fetchData() {
    this.store.dispatch(
      FetchDataAppAction.request({ payload: { isShowError: this.isShowError } })
    );
  }

  public checkShowError() {
    this.isShowError = !this.isShowError;
  }
}
