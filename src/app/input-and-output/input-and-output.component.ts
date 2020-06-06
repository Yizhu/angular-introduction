import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-and-output',
  templateUrl: './input-and-output.component.html',
  styleUrls: ['./input-and-output.component.scss']
})
export class InputAndOutputComponent implements OnInit {
  currentItem = 'Television';
  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
