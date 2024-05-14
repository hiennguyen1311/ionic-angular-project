import { Component, OnInit } from '@angular/core';
import { ApplicationState } from '@models/store.interface';
import { Store, select } from '@ngrx/store';
import { UpdateAppAction } from '@store/app/app.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-store-manager',
  templateUrl: './store-manager.page.html',
  styleUrls: ['./store-manager.page.scss'],
})
/** STATE MANAGER */
export class StoreManagerPage implements OnInit {
  public version = '';
  private version$: Observable<string>;
  public code = 1;
  private code$: Observable<number>;
  constructor(private store: Store<ApplicationState>) {
    this.version$ = this.store.pipe(select('app', 'version'));
    this.code$ = this.store.pipe(select('app', 'code'));
  }

  ngOnInit() {
    this.version$.subscribe((value) => (this.version = value));
    this.code$.subscribe((value) => (this.code = value));
  }

  inscreaseCode() {
    this.store.dispatch(UpdateAppAction.request({ payload: { code: 1 } }));
  }
}
