import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vendor'
})
export class VendorPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch(value){
      case '1':
      return 'PadiNET'
      break
      case '2':
      return 'Icon+'
      break
      case '3':
      return 'Fiber Star'
      break
      case '4':
      return 'Telkom'
      break
      case '5':
      return 'PegasCom'
      break
      case '6':
      return 'NapInfo'
      break
      case '7':
      return 'APJII'
      break
      case '8':
      return 'CGS'
      break
      case '9':
      return 'BizNet'
      break
    }
  }

}
