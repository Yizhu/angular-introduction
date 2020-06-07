import { Component, OnInit, ContentChild, AfterContentChecked, AfterContentInit } from '@angular/core';
import { AfterContentChildComponent } from '../after-content-child/after-content-child.component';

@Component({
  selector: 'app-after-content',
  templateUrl: './after-content.component.html',
  styleUrls: ['./after-content.component.scss']
})
export class AfterContentComponent implements OnInit, AfterContentChecked, AfterContentInit {
  private prevHero = '';
  comment = '';

  // Query for a content child
  @ContentChild('content') contentChild;

  ngOnInit() {
    console.log('ngOnInit');
    console.log('contentChild: ', this.contentChild);
  }

  ngAfterContentInit() {
    // contentChild is set after the content has been initialized
    console.log('AfterContentInit');
    this.doSomething();
    console.log('contentChild: ', this.contentChild.hero);
  }

  ngAfterContentChecked() {
    // contentChild is updated after the content has been checked
    if (this.prevHero === this.contentChild.hero) {
      console.log('AfterContentChecked (no change)');
    } else {
      this.prevHero = this.contentChild.hero;
      console.log('AfterContentChecked');
      console.log('contentChild: ', this.contentChild.hero);
      this.doSomething();
    }
  }

  // This surrogate for real business logic sets the `comment`
  private doSomething() {
    this.comment = this.contentChild.hero.length > 10 ? `That's a long name` : '';
  }

}
