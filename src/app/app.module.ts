import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MinionComponent } from './minion/minion.component';
import { BindingComponent } from './binding/binding.component';
import { HomeComponent } from './home/home.component';
import { InputAndOutputComponent } from './input-and-output/input-and-output.component';
import { ItemDetailComponent } from './input-and-output/item-detail/item-detail.component';
import { ItemOutputComponent } from './input-and-output/item-output/item-output.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { NgOnChangesComponent } from './lifecycle-hooks/ng-on-changes/ng-on-changes.component';
import { NgOnInitDestroyComponent } from './lifecycle-hooks/ng-on-init-destroy/ng-on-init-destroy.component';
import { NgDoCheckComponent } from './lifecycle-hooks/ng-do-check/ng-do-check.component';
import { AfterContentComponent } from './lifecycle-hooks/after-content/after-content.component';
import { AfterViewComponent } from './lifecycle-hooks/after-view/after-view.component';
import { AfterChildComponent } from './lifecycle-hooks/after-child/after-child.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { PipeComponent } from './pipe/pipe.component';
import { FlyingHeroesPipe, FlyingHeroesImpurePipe } from './shared/flying-heroes.pipe';
import { FlyingHeroesComponent } from './pipe/flying-heroes/flying-heroes.component';
import { FlyingHeroesImpureComponent } from './pipe/flying-heroes-impure/flying-heroes-impure.component';
import { NgOnChangesParentComponent } from './lifecycle-hooks/ng-on-changes-parent/ng-on-changes-parent.component';
import { NgDoCheckParentComponent } from './lifecycle-hooks/ng-do-check-parent/ng-do-check-parent.component';
import { AfterContentParentComponent } from './lifecycle-hooks/after-content-parent/after-content-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    MinionComponent,
    BindingComponent,
    HomeComponent,
    InputAndOutputComponent,
    ItemDetailComponent,
    ItemOutputComponent,
    LifecycleHooksComponent,
    NgOnChangesComponent,
    NgOnInitDestroyComponent,
    NgDoCheckComponent,
    AfterContentComponent,
    AfterViewComponent,
    AfterChildComponent,
    HeroesComponent,
    HeroDetailComponent,
    PipeComponent,
    FlyingHeroesPipe,
    FlyingHeroesImpurePipe,
    FlyingHeroesComponent,
    FlyingHeroesImpureComponent,
    NgOnChangesParentComponent,
    NgDoCheckParentComponent,
    AfterContentParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
