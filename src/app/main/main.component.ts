import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import {SidebarComponent} from "../sidebar/sidebar.component";
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  
  id;
  constructor() { }

  ngOnInit() {
    
  }

}