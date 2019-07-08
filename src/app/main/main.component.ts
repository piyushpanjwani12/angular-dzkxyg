import { Component, OnInit, Input, HostListener } from '@angular/core';
import {SidebarComponent} from "../sidebar/sidebar.component";
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Input() sideBarElement: SidebarComponent;

  @HostListener('click')
  click() {
    this.sideBar.toggle();
  }
  constructor() { }

  ngOnInit() {
  }

}