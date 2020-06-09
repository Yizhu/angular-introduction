import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {
  birthday = new Date(1988, 3, 15); // April 15, 1988
  constructor() { }

  ngOnInit(): void {
  }

}
