import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-ng-on-init-destroy',
  templateUrl: './ng-on-init-destroy.component.html',
  styleUrls: ['./ng-on-init-destroy.component.scss']
})
export class NgOnInitDestroyComponent implements OnInit, OnDestroy {
  counter = 0;
  subscription: Subscription;

  ngOnInit() {
    this.subscription = interval(5000).subscribe(val => {
      this.counter = val;
      console.log(this.counter);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
