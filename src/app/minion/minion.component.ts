import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-minion',
  templateUrl: './minion.component.html',
  styleUrls: ['./minion.component.scss']
})
export class MinionComponent implements OnInit, OnChanges, OnDestroy {
  @Input() title = '--';

  constructor() { }

  ngOnInit(): void {
    console.log(this.title);
  }

  ngOnChanges(): void {
    console.log(this.title);
  }

  ngOnDestroy(): void {
    console.log(this.title);
  }
}
