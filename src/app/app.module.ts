import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeekABooComponent } from './components/peek-aboo/peek-aboo.component';
import { PeekABooDirective } from './directives/peek-aboo.directive';

@NgModule({
  declarations: [
    AppComponent,
    PeekABooComponent,
    PeekABooDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
