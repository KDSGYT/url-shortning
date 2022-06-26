import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LongUrlInputComponent } from './long-url-input/long-url-input.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OutputComponent } from './output/output.component';
import { JumboComponent } from './jumbo/jumbo.component';

@NgModule({
  declarations: [
    AppComponent,
    LongUrlInputComponent,
    NavbarComponent,
    OutputComponent,
    JumboComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
