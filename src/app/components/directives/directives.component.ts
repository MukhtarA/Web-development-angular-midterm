import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent  {
  text1 = 'Also you can add your content for less price';
  text3 = 'Your advertisement for ';
  numbers: number[] = [1, 1.5, 2];
  isGreen = true;
}
