import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { menuList as staticMenuList } from '../../data/menus';

@Component({
  
  selector: 'app-header',
  template: `
    <p>
      header works!
    </p>
  `,
  styles: [
  ]
})
export class HeaderComponent {

}
