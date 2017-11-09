import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyHeader } from './header/header.component';
import { MyFooter } from './footer/footer.component';
import { CustomerList } from './customerlist/customerlist.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHeader,
    MyFooter,
    CustomerList
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
