import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { TrainChildWagonComponent } from './example-1/train-child-wagon/train-child-wagon.component';
import { TrainParentComponent } from './example-1/train-parent/train-parent.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TrainChildWagonComponent,
    TrainParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
