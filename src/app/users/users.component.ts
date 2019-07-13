import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  httpdata;
  pages:number[]=[
    1,2,3,4,5,6,7,8,9,10
  ];
  config: any;
  collection = { count: 60, data: [] };
  displaydata(data) {this.httpdata = data;}
  constructor(private http: HttpClient) { 
    
 
    
  }

  ngOnInit() {
    this.http.get("https://5d283619bc7faf001460f3dd.mockapi.io/models/dummy1/users/?page=1&limit=8").
      subscribe((data) => {this.displaydata(data);})
  }
  public updatePage(page){
    this.http.get("https://5d283619bc7faf001460f3dd.mockapi.io/models/dummy1/users/?page="+page+"&limit=8").
      subscribe((data) => {this.displaydata(data);})
  }
  public nextPage(page){
    var pageNo= parseInt(page, 10);
     console.log(pageNo);
    pageNo=pageNo+1;
   
    this.http.get("https://5d283619bc7faf001460f3dd.mockapi.io/models/dummy1/users/?page="+page+"&limit=8").
      subscribe((data) => {this.displaydata(data);})
  }
  public previousPage(page){
    if(page!=1){
      this.http.get("https://5d283619bc7faf001460f3dd.mockapi.io/models/dummy1/users/?page="+(page-1)+"&limit=8").
      subscribe((data) => {this.displaydata(data);})
    }
  }
}