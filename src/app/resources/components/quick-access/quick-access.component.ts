import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service.js';

@Component({
  selector: 'app-quick-access',
  templateUrl: './quick-access.component.html',
  styleUrls: ['./quick-access.component.scss']
})
export class QuickAccessComponent implements OnInit {
  access = 0;
  constructor(public common: CommonService) { }

  ngOnInit(): void {
  }




  permission(type){
    this.access = this.common.permission("QuickAccessComponent",type);
    return this.access;
  }
}
