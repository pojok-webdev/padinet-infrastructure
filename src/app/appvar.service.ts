import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppvarService {
  host = "192.168.0.117"
  port = "1948"
  server = "http://"+this.host+":"+this.port+"/"
  server_ = "http://localhost:1948/"
  constructor() {
  }
}
