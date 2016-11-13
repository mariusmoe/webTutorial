import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TrainChildWagonComponent } from './example-1/train-child-wagon/train-child-wagon.component';
import { TrainParentComponent } from './example-1/train-parent/train-parent.component';
import { TrainParent2Component } from './example-2/train-parent2/train-parent2.component';
import { TrainChildWagon2Component } from './example-2/train-child-wagon2/train-child-wagon2.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainChildWagonComponent,
    TrainParentComponent,
    TrainParent2Component,
    TrainChildWagon2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
