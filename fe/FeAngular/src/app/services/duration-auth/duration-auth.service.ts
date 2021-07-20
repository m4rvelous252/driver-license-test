import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { DateTime } from 'luxon';
import { KEY } from 'src/app/model/constants';
import { User } from 'src/app/model/user';
import { TimeService } from '../time/time.service';

@Injectable({
  providedIn: 'root'
})
export class DurationAuthService implements CanActivate {

  user!: User

  constructor(private router : Router, private timeService: TimeService, ) { }
  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean {
      if(localStorage.getItem(KEY.user)!=null){
        //Lấy user từ lS
        let dataUser = localStorage.getItem(KEY.user)
        this.user = dataUser !=null ? JSON.parse(dataUser) : null
        //Lấy thời gian đăng nhập trong user
        let time = DateTime.fromISO(this.user.logintime ? this.user.logintime : DateTime.now().toISO());
        let diff = DateTime.now().diff(time,'hours').toObject().hours!
        //Nếu vượt không remember thì kiểm tra thời gian hoạt động
        if(this.user.save!=true){
          if(diff>KEY.durationtimelogin){
            localStorage.removeItem(KEY.user)
          }else{
            this.user.logintime = DateTime.now().toISO();
            localStorage.setItem(KEY.user,JSON.stringify(this.user))
          }
        }
      }
      return true;
  }  

}
