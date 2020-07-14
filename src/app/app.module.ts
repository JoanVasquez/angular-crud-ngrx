import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesModule } from './services/services.module';
import { AppStoreModule } from './store/app-store.module';
import { ComponentModule } from './components/component.module';
import { ViewModule } from './views/view.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppStoreModule,
    ServicesModule,
    ComponentModule,
    ViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
