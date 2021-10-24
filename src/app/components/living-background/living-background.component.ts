import { Component, AfterViewChecked } from '@angular/core';

type Coordinates = {
  [key: string]: number;
}

@Component({
  selector: 'app-living-background',
  templateUrl: './living-background.component.html',
  styleUrls: ['./living-background.component.css']
})

export class LivingBackgroundComponent implements AfterViewChecked {
  contactuserForm: HTMLElement | null = null;

  smallSquareCoords: Coordinates = {} as Coordinates;
  bigSquareCoords: Coordinates = {} as Coordinates;
  bubble: Coordinates = {} as Coordinates;

  constructor() { }

  ngAfterViewChecked(): void {
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
