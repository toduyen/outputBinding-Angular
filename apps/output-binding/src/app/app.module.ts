import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ListArticalComponent } from './list-artical/list-artical.component';
import { DetailArticalComponent } from './detail-artical/detail-artical.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, ListArticalComponent, DetailArticalComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
