import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor() { }
  getCurSecond(){
    let dateTime = DateTime.now()
    return (dateTime.hour*3600+dateTime.minute*60+dateTime.second)
  }
}
