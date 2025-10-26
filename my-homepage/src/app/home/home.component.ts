import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  contentList: string[] = ['Chiranjeev Gupta.', 'a Full Stack Developer.', 'an Explorer.', 'a Foodie.'];

  constructor() { }

  ngOnInit() {
  }

}
