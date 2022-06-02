import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { DemoComponent } from './components/demo/demo.component';
import { Demo1Component } from './components/demo/demo1/demo1.component';
import { Demo10Component } from './components/demo/demo10/demo10.component';
import { Demo2Component } from './components/demo/demo2/demo2.component';
import { Demo3Component } from './components/demo/demo3/demo3.component';
import { Demo4Component } from './components/demo/demo4/demo4.component';
import { Demo5Component } from './components/demo/demo5/demo5.component';
import { Demo6Component } from './components/demo/demo6/demo6.component';
import { Demo7Component } from './components/demo/demo7/demo7.component';
import { Demo8Component } from './components/demo/demo8/demo8.component';
import { ArticleResolver } from './components/demo/demo9/article.resolver';
import { Demo9Component } from './components/demo/demo9/demo9.component';
import { RecupComponent } from './components/demo/demo9/recup/recup.component';
import { ExercicesComponent } from './components/exercices/exercices.component';
import { Exo1Component } from './components/exercices/exo1/exo1.component';
import { Exo2Component } from './components/exercices/exo2/exo2.component';
import { Exo3Component } from './components/exercices/exo3/exo3.component';
import { CreateComponent } from './components/exercices/exo4/create/create.component';
import { DetailsComponent } from './components/exercices/exo4/details/details.component';
import { Exo4Component } from './components/exercices/exo4/exo4.component';
import { FanResolveResolver } from './components/exercices/exo4/service/fan-resolve.resolver';
import { UpdateComponent } from './components/exercices/exo4/update/update.component';
import { FourofourComponent } from './components/fourofour/fourofour.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './shared/auth.guard';


const routes: Routes = [
  {path : '', redirectTo : 'home', pathMatch : 'full'},
  {path : "about", component : AboutComponent},
  {path : "home", component : HomeComponent },
  {path : "demo", component : DemoComponent, children : [
    {path : "demo1", component : Demo1Component},
    {path : "demo2", component : Demo2Component},
    {path : "demo3", component : Demo3Component},
    {path : "demo4", component : Demo4Component},
    {path : "demo5", component : Demo5Component},
    {path : "demo6", component : Demo6Component},
    {path : "demo7", component : Demo7Component},
    {path : "demo8", canActivate : [AuthGuard], component : Demo8Component},
    {path : "demo9", component : Demo9Component},
    {path : "recup/:id", resolve : {monArticle : ArticleResolver}, component : RecupComponent},
    {path : "demo10", component : Demo10Component},

  ]},
  {path : "exercices", component : ExercicesComponent, children : [
    {path : "exo1", component : Exo1Component},
    {path : "exo2", component : Exo2Component},
    {path : "exo3", component : Exo3Component},
    {path : "exo4", component : Exo4Component},
    {path : "create", component : CreateComponent},
    {path : "update/:id", resolve : {monFan : FanResolveResolver}, component : UpdateComponent},
    {path : "details/:id", component : DetailsComponent},
  ]},
  {path : '**', redirectTo : '404', pathMatch : 'full'},
  {path : '404', component : FourofourComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
