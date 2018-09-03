import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { AppvarService } from './appvar.service';
@Injectable({
  providedIn: 'root'
})
export class NodeService {
  node : Observable<any>
  constructor(private http:HttpClient,private appvar:AppvarService) { }
  saveNode(objs,callback){
    console.log("NODE TO SAVE",objs)
    this.node = this.http.post(this.appvar.server+'savenode',objs)
    this.node.subscribe(
      data => {
        console.log("Success savenode",data)
        callback(data)
      },
      err => {
        console.log("Error savenode",err)
        callback(err)
      }
    )
  }
  getnodes(callback){
    this.node = this.http.get(this.appvar.server+'getnodes')
    this.node.subscribe(
      data => {
        console.log("Success getnode",data)
        callback(data)
      },
      err => {
        console.log("Error getnode",err)
        callback(err)
      }
    )
  }
  getlinks(callback){
    this.node = this.http.get(this.appvar.server+'getedges')
    this.node.subscribe(
      data => {
        console.log("Success getedges",data)
        callback(data)
      },
      err => {
        console.log("Error getedges",err)
        callback(err)
      }
    )
  }
}
