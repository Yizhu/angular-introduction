import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-on-changes-parent',
  templateUrl: './ng-on-changes-parent.component.html',
  styleUrls: ['./ng-on-changes-parent.component.scss']
})
export class NgOnChangesParentComponent implements OnInit {
  value = 100;
  constructor() { }

  ngOnInit(): void {
  }

  increase() {
    this.value += 1;
  }

  decrease() {
    this.value -= 1;
  }
}
