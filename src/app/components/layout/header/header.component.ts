import { Component, HostListener, Input, OnInit } from '@angular/core';
import { CartComponent } from '../../shared/cart/cart.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }

}
