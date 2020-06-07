import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.scss']
})
export class LifecycleHooksComponent implements OnInit {
  value = 100;
  price = { value: 100 };
  constructor() { }

  ngOnInit(): void {
  }

  increase() {
    this.value += 1;
  }

  decrease() {
    this.value -= 1;
  }

  increasePrice() {
    this.price.value += 1;
  }

  decreasePrice() {
    this.price.value -= 1;
  }

}
