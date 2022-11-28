import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atribute',
  templateUrl: './atribute.component.html',
  styleUrls: ['./atribute.component.scss']
})
export class AtributeComponent implements OnInit {

  constructor() { }

  messageType = 2;
  inputValue= "cami";

  ngOnInit(): void {
  }

}
