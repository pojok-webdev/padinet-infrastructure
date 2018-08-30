import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppvarService {
  server = "http://192.168.0.117:2500/"
  constructor() { }
}
