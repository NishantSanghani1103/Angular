import { Component } from '@angular/core';
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-ng-if-component',
  imports: [NgIf],
  templateUrl: './ng-if-component.html',
  styleUrl: './ng-if-component.css',
})
export class NgIfComponent {
  isLogin = false;
}
