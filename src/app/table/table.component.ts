import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  users:any[] = [];
  id:number = 0;
  isActive:boolean = false;
  constructor(private _service:HttpService) {
    const promise = new Promise((resolve,reject)=>{
      
      _service.getUsers()
      .subscribe( (x:any) =>{
        this.users = x;
        this.isActive = true;
        resolve('1');
      });
      });
      
     
    }

  ngOnInit(): void {
  }

}
