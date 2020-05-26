import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit {
  name = 'Angular';
  counter = 0;

  constructor() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  }

  ngOnInit(): void {
  }

  onClickButton(): void {
    alert('Hello ' + this.name);
  }

}
