import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BindingComponent } from './binding/binding.component';
import { InputAndOutputComponent } from './input-and-output/input-and-output.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'binding', component: BindingComponent },
{ path: 'home', component: HomeComponent },
{ path: 'inputAndOutput', component: InputAndOutputComponent },
{ path: 'lifecycleHooks', component: LifecycleHooksComponent },
{ path: 'heroes', component: HeroesComponent},
{ path: 'heroDetail/:id', component: HeroDetailComponent },
{ path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
