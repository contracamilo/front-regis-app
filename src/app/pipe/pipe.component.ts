import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

  name = "Gabin";
  date = "Wed Nov 16 2022 22:42:31 GMT-0500"

  constructor() { }

  ngOnInit(): void {
  }

}
