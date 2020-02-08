import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MainframeComponent } from './mainframe/main-frame.component';
import { MaterialComponent } from './material.component';

@NgModule({
  declarations: [
    AppComponent,
    MainframeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialComponent
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
