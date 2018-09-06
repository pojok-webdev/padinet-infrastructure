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
  updatenode(obj,callback){
    this.node = this.http.post(this.appvar.server+'updatenode',obj)
    this.node.subscribe(
      data => {
        console.log("Success updatenode",data)
        callback(data)
      },
      err => {
        console.log("Error updatenode",err)
        callback(err)
      }
    )
  }
  removeNode(obj,callback){
    this.node = this.http.get(this.appvar.server+'removenode/'+obj.id)
    this.node.subscribe(
      data => {
        console.log("Success removenode",data)
        callback(data)
      },
      err => {
        console.log("Error removenode",err)
        callback(err)
      }
    )
  }
  getNeighbours(node_id,callback){
    this.node = this.http.get(this.appvar.server+'getneighbours/'+node_id)
    this.node.subscribe(
      data => {
        console.log("Success getneighbours",data)
        callback(data)
      },
      err => {
        console.log("Error getneighbours",err)
        callback(err)
      }
    )
  }
}
