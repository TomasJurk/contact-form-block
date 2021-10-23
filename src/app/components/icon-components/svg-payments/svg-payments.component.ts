import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-svg-payments',
  templateUrl: './svg-payments.component.html',
  styleUrls: ['./svg-payments.component.css']
})
export class SvgPaymentsComponent implements OnChanges {
  @Input() selected: boolean = true;

  fillColor: string = 'white';

  ngOnChanges() {
    this.fillColor = this.selected ? '#fff' : '#202E3D'
  }
  

}
