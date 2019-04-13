import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tempe-headers',
  templateUrl: './tempe-headers.component.html',
  styleUrls: ['./tempe-headers.component.css']
})
export class TempeHeadersComponent implements OnInit {
  isCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

}
