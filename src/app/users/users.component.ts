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
  config: any;
  collection = { count: 60, data: [] };
  displaydata(data) {this.httpdata = data;}
  constructor(private http: HttpClient) { 
    
 
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: 10,
    };
  }
 
  pageChanged(event){
    this.config.currentPage = event;
  }
  
  
  ngOnInit() {
    this.http.get("https://jsonplaceholder.typicode.com/users").
      subscribe((data) => {this.displaydata(data);})
  }
  
}