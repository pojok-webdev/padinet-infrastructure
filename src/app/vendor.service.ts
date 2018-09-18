import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppvarService } from './appvar.service';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
obj : Observable<any>
  constructor(
    private http:HttpClient,
    private appvar : AppvarService
  ) { }
  gets(callback){
    this.obj = this.http.get(this.appvar.server+'getvendors')
    this.obj.subscribe(
      data => {
        console.log("Success get vendors",data)
        callback(data)
      },
      err => {
        console.log("Err get vendors",err)
        callback(err)
      }
    )
  }
}
