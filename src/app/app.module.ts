import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LongUrlInputComponent } from './long-url-input/long-url-input.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OutputComponent } from './output/output.component';
import { JumboComponent } from './jumbo/jumbo.component';
import { AboutComponent } from './about/about.component';
import { ModeSwitchComponent } from './mode-switch/mode-switch.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LongUrlInputComponent,
    NavbarComponent,
    OutputComponent,
    JumboComponent,
    AboutComponent,
    ModeSwitchComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
