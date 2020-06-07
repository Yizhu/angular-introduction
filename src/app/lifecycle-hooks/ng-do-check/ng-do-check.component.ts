import { Component, OnInit, Input, DoCheck, OnChanges, SimpleChanges } from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-ng-do-check',
  templateUrl: './ng-do-check.component.html',
  styleUrls: ['./ng-do-check.component.scss']
})
export class NgDoCheckComponent implements OnInit, OnChanges, DoCheck {
  firstChange = true;
  lastPriceValue: number;
  priceIncrease: boolean;
  priceDecrease: boolean;
  @Input() price: { value: number };

  ngOnInit() {
    console.log('Price Component Init');
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('Price Component Input Changed');
    // this.firstChange = changes.price.firstChange;
    // this.lastPriceValue = changes.price.previousValue;
  }

  ngDoCheck() {
    // Detect and act upon changes that Angular can't or won't detect on its own.
    if (this.price && this.lastPriceValue && this.price.value !== this.lastPriceValue) {
      this.firstChange = false;
      this.priceIncrease = this.price.value > this.lastPriceValue;
      this.priceDecrease = this.price.value < this.lastPriceValue;
    }
    this.lastPriceValue = this.price.value;
  }
}
