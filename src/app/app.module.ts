import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

import { DFService } from 'ng-dfservice';
import { MY_DATASTORE_PROVIDERS } from './dfdatastores/myDataStores';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    MY_DATASTORE_PROVIDERS,
    { provide: DFService.DFSERVICE_CONFIG, useValue: environment.dfservice_config }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
