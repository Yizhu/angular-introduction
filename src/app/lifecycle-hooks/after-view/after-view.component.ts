import { Component, AfterViewChecked, AfterViewInit, ViewChild } from '@angular/core';
import { AfterChildComponent } from '../after-child/after-child.component';

@Component({
  selector: 'app-after-view',
  templateUrl: './after-view.component.html',
  styleUrls: ['./after-view.component.scss']
})
export class AfterViewComponent implements  AfterViewChecked, AfterViewInit {
  private prevHero = '';
  comment = '';
  // Query for a VIEW child of type `AfterChildComponent`
  @ViewChild(AfterChildComponent) viewChild: AfterChildComponent;

  ngOnInit() {
    console.log('ngOnInit');
    console.log('viewChild: ', this.viewChild);
  }

  ngAfterViewInit() {
    // viewChild is set after the view has been initialized
    console.log('AfterViewInit');
    console.log('viewChild: ', this.viewChild.hero);
    this.doSomething();
  }

  ngAfterViewChecked() {
    // viewChild is updated after the view has been checked
    if (this.prevHero === this.viewChild.hero) {
      console.log('AfterViewChecked (no change)');
    } else {
      this.prevHero = this.viewChild.hero;
      console.log('AfterViewChecked');
      console.log('viewChild: ', this.viewChild.hero);
      this.doSomething();
    }
  }

  // This surrogate for real business logic sets the `comment`
  private doSomething() {
    this.comment = this.viewChild.hero.length > 10 ? `That's a long name` : '';
  }

}

