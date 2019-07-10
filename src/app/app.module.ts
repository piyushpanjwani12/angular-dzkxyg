import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { UsersComponent } from './users/users.component';
import { FilterPipe } from './filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { WorkspaceComponent } from './workspace/workspace.component';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, NgxPaginationModule,
    RouterModule.forRoot([
      {
            path: 'main',
            component: MainComponent
         },
         {
            path: 'users',
            component: UsersComponent
         },
         {
           path: 'workspace',
           component: WorkspaceComponent
         }
      
         
         
      ])
   ],
  declarations: [ AppComponent, HelloComponent, SidebarComponent, MainComponent, UsersComponent, FilterPipe, WorkspaceComponent ],
  bootstrap:    [ AppComponent ],
  exports: [FilterPipe]
})
export class AppModule { }
