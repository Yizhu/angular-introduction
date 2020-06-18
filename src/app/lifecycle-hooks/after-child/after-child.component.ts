import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-after-child',
  templateUrl: './after-child.component.html',
  styleUrls: ['./after-child.component.scss']
})
export class AfterChildComponent implements OnInit {
  hero = 'Magneta';
  constructor() { }

  ngOnInit(): void {
    console.log('AfterChildComponent ngOnInit')
  }

}
