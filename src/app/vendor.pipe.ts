import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vendor'
})
export class VendorPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let out
    switch(value){
      case '1':
      out = 'PadiNET'
      break
      case '2':
      out = 'Icon+'
      break
      case '3':
      out = 'Fiber Star'
      break
      case '4':
      out = 'Telkom'
      break
      case '5':
      out = 'PegasCom'
      break
      case '6':
      out = 'NapInfo'
      break
      case '7':
      out = 'APJII'
      break
      case '8':
      out = 'CGS'
      break
      case '9':
      out = 'BizNet'
      break
    }
    return out
  }

}
