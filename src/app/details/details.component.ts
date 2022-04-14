import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id:number = 0;
  isActive:boolean = false;
  user:any = {

  }

  constructor(private service:HttpService,
    private route:ActivatedRoute) {
      
      this.route.params.subscribe( params =>
        {
          this.id = params['id'];
        })
        this.initUser();
  }

  ngOnInit(): void {
  }
  
  initUser(){
    const promise = new Promise((resolve,reject)=>{
      this.service.getUserById(this.id).subscribe( user =>{
        this.user = user;
      this.isActive = true;
      })
      resolve("1");

    });
 
  }

}
