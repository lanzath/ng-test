import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoListModule } from './components/photo-list/photo-list.module';
import { LoaderModule } from './shared/components/loader/loader.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PhotoListModule,
    LoaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
