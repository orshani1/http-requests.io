import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly server = 'https://fakestoreapi.com';
  constructor(private _http:HttpClient) {

   }
   getUsers(){
     return this._http.get(`${this.server}/users`);
   }
   getUserById(id:number){
     return this._http.get(`${this.server}/users/${id}`);
   }
}
