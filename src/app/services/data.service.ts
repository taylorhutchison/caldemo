import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private hardcodedData: any = {
    'Sat Aug 21 2021': {
      authorized: true
    }
  }

  constructor() { }

  getDataInRange(fromDate: Date, toDate: Date): any[] {
    return Object.keys(this.hardcodedData).filter((key: string) => {
      const date = new Date(key);
      return date >= fromDate && date <= toDate;
    }).reduce((obj: any, key) => {
      obj[key] = this.hardcodedData[key];
      return obj;
    }, {});
  }

}
