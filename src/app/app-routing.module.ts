import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BindingComponent } from './binding/binding.component';
import { InputAndOutputComponent } from './input-and-output/input-and-output.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { PipeComponent } from './pipe/pipe.component';
import { NgOnChangesParentComponent } from './lifecycle-hooks/ng-on-changes-parent/ng-on-changes-parent.component';
import { NgOnInitDestroyComponent } from './lifecycle-hooks/ng-on-init-destroy/ng-on-init-destroy.component';
import { NgDoCheckParentComponent } from './lifecycle-hooks/ng-do-check-parent/ng-do-check-parent.component';
import { AfterContentParentComponent } from './lifecycle-hooks/after-content-parent/after-content-parent.component';
import { AfterViewComponent } from './lifecycle-hooks/after-view/after-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'binding', component: BindingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'inputAndOutput', component: InputAndOutputComponent },
  {
    path: 'lifecycleHooks', component: LifecycleHooksComponent,
    children: [
      { path: '', component: NgOnChangesParentComponent },
      { path: 'onchange', component: NgOnChangesParentComponent },
      { path: 'initDestory', component: NgOnInitDestroyComponent },
      { path: 'doCheck', component: NgDoCheckParentComponent },
      { path: 'afterContent', component: AfterContentParentComponent },
      { path: 'afterView', component: AfterViewComponent }
    ]
  },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroDetail/:id', component: HeroDetailComponent },
  { path: 'pipe', component: PipeComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
