import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule,JsonpModule } from '@angular/http';

import { ReactiveFormsModule } from '@angular/forms';
import { ApiService,WikipediaService } from './api.service';
import { SampleModule } from './sample/sample.module';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  imports: [
    HttpModule,SampleModule,
    ReactiveFormsModule,
    JsonpModule,
    BrowserModule,
    AppRoutingModule],
  providers: [ ApiService,WikipediaService ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
