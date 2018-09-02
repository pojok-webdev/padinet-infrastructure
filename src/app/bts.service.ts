import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { AppvarService } from './appvar.service';
@Injectable({
  providedIn: 'root'
})
export class BtsService {
  bts : Observable<any>
  constructor(private http:HttpClient,private appvar:AppvarService) { }
  saveBTS(objs,callback){
    this.bts = this.http.post(this.appvar.server+'savebts',objs)
    this.bts.subscribe(
      data => {
        console.log("Success savebts",data)
        callback(data)
      },
      err => {
        console.log("Error savebts",err)
        callback(err)
      }
    )
  }
  getbtstowers(callback){
    this.bts = this.http.get(this.appvar.server+'getbtstowers')
    this.bts.subscribe(
      data => {
        console.log("Success getbts",data)
        callback(data)
      },
      err => {
        console.log("Error getbts",err)
        callback(err)
      }
    )
  }
  getlinks(callback){
    this.bts = this.http.get(this.appvar.server+'getlinks')
    this.bts.subscribe(
      data => {
        console.log("Success getlinks",data)
        callback(data)
      },
      err => {
        console.log("Error getlinks",err)
        callback(err)
      }
    )
  }
}
