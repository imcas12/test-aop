import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'abe-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public executeSelectedChange = (event) => {
      console.log(event);
  }

}