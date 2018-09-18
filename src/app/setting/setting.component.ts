import { Component, OnInit } from '@angular/core';
import { AppvarService } from '../appvar.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  setting = {
    host:'',
    port:''
  }
  constructor(private appvar : AppvarService) {
    this.setting.host = this.appvar.host
    this.setting.port = this.appvar.port
  }
  saveSetting(setting){
    this.appvar.host = setting.host
    this.appvar.port = setting.port
    this.appvar.server = 'http://'+setting.host+':'+setting.port+'/'
    console.log("Server",this.appvar.server)
  }
  ngOnInit() {
  }

}
