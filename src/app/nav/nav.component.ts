import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
navLinks = [
  {path: 'home', label: 'Home'},
  {path: 'work', label: 'Our Work'},
];
  constructor() { }

  ngOnInit() {
  }

}
