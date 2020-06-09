import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-minion',
  templateUrl: './minion.component.html',
  styleUrls: ['./minion.component.scss']
})
export class MinionComponent implements OnInit {
  @Input() title;

  constructor() { }

  ngOnInit(): void {}
}
