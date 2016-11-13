import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { TrainChildWagonComponent } from './example-1/train-child-wagon/train-child-wagon.component';
import { TrainParentComponent } from './example-1/train-parent/train-parent.component';
import { TrainParent2Component } from './example-2/train-parent2/train-parent2.component';
import { TrainChildWagon2Component } from './example-2/train-child-wagon2/train-child-wagon2.component';
import { TrainChildWagon3Component } from './example-3/train-child-wagon3/train-child-wagon3.component';
import { TrainParent3Component } from './example-3/train-parent3/train-parent3.component';
import { InfoBoxComponent } from './example-3/info-box/info-box.component';

import { WagonService } from './example-3/wagon.service';
import { Example3Component } from './example-3/example3/example3.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TrainChildWagonComponent,
    TrainParentComponent,
    TrainParent2Component,
    TrainChildWagon2Component,
    TrainChildWagon3Component,
    TrainParent3Component,
    InfoBoxComponent,
    Example3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/train-parent',
        pathMatch: 'full'
      },
      {
        path: "train-parent",
        component: TrainParentComponent
      },
      {
        path: "train-parent2",
        component: TrainParent2Component
      },
      {
        path: "example3",
        component: Example3Component
      }
    ])
  ],
  providers: [
    WagonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
