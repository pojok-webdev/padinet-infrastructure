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
    obj.source = obj.source.toString()
    obj.target = obj.target.toString()
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
        //obj.id = 'e'+obj.id
        callback(obj)
      },
      err => {
        console.log(err)
        callback(err)
      }
    )
  }
  getedges(obj,callback){
    console.log("edge invoked",obj)
    if(obj.node_id == null){
      console.log("Without parameter")
      this.obj = this.http.get(this.appvar.server+'getedges/'+obj.node_id)
    }else{
      console.log("With parameter")
      this.obj = this.http.get(this.appvar.server+'getedges/'+obj.node_id)
    }
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
    console.log("Remove Edge invoked",obj)
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
  getVendors(callback){
    this.obj = this.http.get(this.appvar.server+'getvendors')
    this.obj.subscribe(
      data => {
        console.log("Success getvendors",data)
        callback(data)
      },
      err => {
        console.log("Error getvendors",err)
        callback(err)
      }
    )
  }
  getLinkTypes(callback){
    this.obj = this.http.get(this.appvar.server+'getlinktypes')
    this.obj.subscribe(
      data => {
        console.log("Success getlinktypes",data)
        callback(data)  
      },
      err => {
        console.log("Error getlinktypes",err)
        callback(err)
      }
    )
  }
}
