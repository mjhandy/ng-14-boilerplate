import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
  standalone: true,
  imports: [MatIconModule],
})
export class IconsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
