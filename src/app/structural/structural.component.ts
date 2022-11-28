import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.scss']
})
export class StructuralComponent implements OnInit {

  isError = false;
  sections = ["uno","dos","tres","cuatro","cinco"]
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {this.isError = true}, 4000)
  }

  showError(){
    this.isError = false
  }

}
