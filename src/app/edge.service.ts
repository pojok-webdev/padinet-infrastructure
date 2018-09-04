import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppvarService } from './appvar.service';

@Injectable({
  providedIn: 'root'
})
export class EdgeService {
  obj : Observable<any>
  objs : Observable<any[]>
  constructor(private http:HttpClient,private appvar:AppvarService) {}
  saveEdge(obj,callback){
    this.obj = this.http.post<any>(this.appvar.server+'saveedge',obj)
    this.obj.subscribe(
      data => {
        console.log(data),
        callback(data)
      },
      err => {
        console.log(err)
        callback(err)
      }
    )
  }
  updateEdge(obj,callback){
    this.obj = this.http.post<any>(this.appvar.server+'updateedge',obj)
    this.obj.subscribe(
      data => {
        console.log(data),
        callback(data)
      },
      err => {
        console.log(err)
        callback(err)
      }
    )
  }
  getedges(callback){
    this.obj = this.http.get(this.appvar.server+'getedges')
    this.obj.subscribe(
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
  removeedge(obj,callback){
    this.obj = this.http.get(this.appvar.server+'removeedge/'+obj.id)
    this.obj.subscribe(
      data => {
        console.log("Success remove edge",data)
        callback(data)
      },
      err => {
        console.log("Error remove edge",err)
        callback(err)
      }
    )
  }
}
