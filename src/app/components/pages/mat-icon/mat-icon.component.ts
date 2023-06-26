import { Component, NgModule, OnInit, ViewEncapsulation } from '@angular/core';

import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-mat-icon',
  templateUrl: './mat-icon.component.html',
  styleUrls: ['./mat-icon.component.scss'],
  standalone: true,
  imports: [MatIconModule],
  
})



export class MatIconComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
