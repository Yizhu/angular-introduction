import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-do-check-parent',
  templateUrl: './ng-do-check-parent.component.html',
  styleUrls: ['./ng-do-check-parent.component.scss']
})
export class NgDoCheckParentComponent implements OnInit {
  price = { value: 100 };
  constructor() { }

  ngOnInit(): void {
  }

  increase() {
    this.price.value += 1;
  }

  decrease() {
    this.price.value -= 1;
  }

  test() {
    alert(JSON.stringify(this.price));
  }
}
