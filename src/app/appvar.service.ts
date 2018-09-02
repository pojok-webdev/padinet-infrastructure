import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppvarService {
  server_ = "http://192.168.0.117:2500/"
  server = "http://localhost:1948/"
  constructor() { }
}
