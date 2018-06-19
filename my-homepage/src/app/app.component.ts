import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contentList = [
    'Chiranjeev Gupta',
    'a Web Developer',
    'a FOSS Advocate',
    'a ML Enthusiast'
  ]
}
