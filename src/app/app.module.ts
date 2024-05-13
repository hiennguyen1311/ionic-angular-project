import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabsComponent } from './modules/tabs/tabs.component';
import { CustomServiceProviders } from '@services/service.custom';
import { CustomModulesImport } from './app.custom-module';

@NgModule({
  declarations: [AppComponent, TabsComponent],
  imports: CustomModulesImport,
  providers: CustomServiceProviders,
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
