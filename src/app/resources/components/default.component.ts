import {Component, OnInit} from '@angular/core';
import { Router, NavigationEnd} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  private _router: Subscription;

  constructor(private router: Router) { }

  ngOnInit() {


    this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
      //
    });

  }

}
