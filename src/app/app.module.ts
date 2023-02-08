import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MenuTitleComponent,
    SmallCardComponent,
    BigCardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
