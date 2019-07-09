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
  constructor(private http: HttpClient) { }
  
  ngOnInit() {
    this.http.get("https://jsonplaceholder.typicode.com/users").
      subscribe((data) => {this.displaydata(data);})
  }
  displaydata(data) {this.httpdata = data;}
}