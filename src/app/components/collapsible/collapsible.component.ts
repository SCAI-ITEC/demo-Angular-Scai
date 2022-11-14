import { Component, OnInit } from '@angular/core';
import { getUUID } from 'src/app/utils/utils';

@Component({
  selector: 'app-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.scss']
})
export class CollapsibleComponent implements OnInit {

  UUID: string;

  constructor() {
    this.UUID = getUUID();
  }

  ngOnInit(): void {
  }

}
