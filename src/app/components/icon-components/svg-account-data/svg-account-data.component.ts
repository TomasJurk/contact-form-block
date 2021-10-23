import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-svg-account-data',
  templateUrl: './svg-account-data.component.html',
  styleUrls: ['./svg-account-data.component.css']
})
export class SvgAccountDataComponent implements OnChanges {
  @Input() selected: boolean = false;

  fillColor: string = '#202E3D';

  ngOnChanges() {
    this.fillColor = this.selected ? '#fff' : '#202E3D';
  }
  

}
