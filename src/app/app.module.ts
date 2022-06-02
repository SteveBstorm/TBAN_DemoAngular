import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DemoComponent } from './components/demo/demo.component';
import { Demo1Component } from './components/demo/demo1/demo1.component';
import { Demo2Component } from './components/demo/demo2/demo2.component';
import { NavComponent } from './components/nav/nav.component';
import { FormsModule } from '@angular/forms';
import { Demo3Component } from './components/demo/demo3/demo3.component';
import { EurtobtcPipe } from './shared/eurtobtc.pipe';
import { ExercicesComponent } from './components/exercices/exercices.component';
import { Exo1Component } from './components/exercices/exo1/exo1.component';
import { TotimePipe } from './shared/totime.pipe';
import { Demo4Component } from './components/demo/demo4/demo4.component';
import { Demo5Component } from './components/demo/demo5/demo5.component';
import { EnfantComponent } from './components/demo/demo5/enfant/enfant.component';
import { Exo2Component } from './components/exercices/exo2/exo2.component';
import { Exo2childComponent } from './components/exercices/exo2/exo2child/exo2child.component';
import { Demo6Component } from './components/demo/demo6/demo6.component';
import { Exo3Component } from './components/exercices/exo3/exo3.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Demo7Component } from './components/demo/demo7/demo7.component';
import { Exo4Component } from './components/exercices/exo4/exo4.component';
import { CreateComponent } from './components/exercices/exo4/create/create.component';
import { FourofourComponent } from './components/fourofour/fourofour.component';
import { Demo8Component } from './components/demo/demo8/demo8.component';
import { Demo9Component } from './components/demo/demo9/demo9.component';
import { RecupComponent } from './components/demo/demo9/recup/recup.component';
import { UpdateComponent } from './components/exercices/exo4/update/update.component';
import { DetailsComponent } from './components/exercices/exo4/details/details.component';
import { Demo10Component } from './components/demo/demo10/demo10.component';


import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DemoComponent,
    Demo1Component,
    Demo2Component,
    NavComponent,
    Demo3Component,
    EurtobtcPipe,
    ExercicesComponent,
    Exo1Component,
    TotimePipe,
    Demo4Component,
    Demo5Component,
    EnfantComponent,
    Exo2Component,
    Exo2childComponent,
    Demo6Component,
    Exo3Component,
    Demo7Component,
    Exo4Component,
    CreateComponent,
    FourofourComponent,
    Demo8Component,
    Demo9Component,
    RecupComponent,
    UpdateComponent,
    DetailsComponent,
    Demo10Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
