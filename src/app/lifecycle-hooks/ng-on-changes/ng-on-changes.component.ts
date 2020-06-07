import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ng-on-changes',
  templateUrl: './ng-on-changes.component.html',
  styleUrls: ['./ng-on-changes.component.scss']
})
export class NgOnChangesComponent implements OnInit, OnChanges {
  firstChange = true;
  lastPrice;
  @Input() price;

  constructor() { }
  ngOnInit() {
    console.log('Price Component Init');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Price Component Input Changed');
    this.firstChange = changes.price.firstChange;
    this.lastPrice = changes.price.previousValue;
  }

}
