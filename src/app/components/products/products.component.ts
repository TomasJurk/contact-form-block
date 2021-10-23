import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  currentTab: {[key: string]: boolean} = {
    payments: true,
    accData: false
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSelectTab(selectedTab: string): void {
    Object.keys(this.currentTab).forEach(tab => {
      if (tab === selectedTab) {
        this.currentTab[tab] = true;
      } else {
        this.currentTab[tab] = false;
      }
    })
  }

}
