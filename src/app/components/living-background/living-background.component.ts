import { Component, OnInit, AfterContentInit } from '@angular/core';

type Coordinates = {
  [key: string]: number;
};

@Component({
  selector: 'app-living-background',
  templateUrl: './living-background.component.html',
  styleUrls: ['./living-background.component.css'],
})
export class LivingBackgroundComponent implements OnInit, AfterContentInit {
  contactuserForm: HTMLElement | null = null;

  smallSquareCoords: Coordinates = { x: 0, y: 0 };
  bigSquareCoords: Coordinates = { x: 0, y: 0 };
  bubble: Coordinates = { x: 0, y: 0 };

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.setItemsCoordinates();
  }

  setItemsCoordinates(): void {
    this.contactuserForm = document.getElementById('contactUserForm');
    const rect = this.contactuserForm?.getBoundingClientRect();
    if (rect) {
      this.smallSquareCoords.x = rect.x + 300;
      this.smallSquareCoords.y = rect.y - 25;
      this.bigSquareCoords.x = rect.x + 350;
      this.bigSquareCoords.y = rect.y + 100;
      this.bubble.x = rect.x - 80;
      this.bubble.y = rect.y - 60;
    }
  }

  onResize(): void {
    this.setItemsCoordinates();
  }
}
