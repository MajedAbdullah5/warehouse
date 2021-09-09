import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import { AuthGuard } from './core_classes/auth-guard';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Inf HRMS';
  
constructor (private auth: AuthService,private router: Router,public common: AuthGuard) {
   // this.common.canActivate();
  }
  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
