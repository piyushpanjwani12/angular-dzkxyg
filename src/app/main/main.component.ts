import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import {SidebarComponent} from "../sidebar/sidebar.component";
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  isElement1Dropped: boolean;
  isElement2Dropped: boolean;
  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if(ev.target.id!=="drag1" && ev.target.id!=="drag2"){
      ev.target.appendChild(document.getElementById(data));
    }
    
  }

  allowDrop(ev) {
    // if(ev.target.id==="dropHere")
    // document.getElementById("myCard").style.display="none";
    // if(ev.target.id==="dropHere1")
    // document.getElementById("myCard1").style.display="none";
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  id;
  constructor() { }

  ngOnInit() {
    
  }

}