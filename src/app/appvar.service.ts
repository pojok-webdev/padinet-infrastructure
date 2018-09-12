import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppvarService {
  server_ = "http://192.168.0.117:1948/"
  server = "http://localhost:1948/"
  constructor() { }
}
