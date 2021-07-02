import { Observable } from 'rxjs';
import { MenuService } from '../../services/menu.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [];
  selected!: MenuItem;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.getJSON().subscribe((data) => {
      this.menuItems = data;
      this.selected = this.menuItems[0]; // init
    });
  }

  passDataToModal(id: number) {
    this.selected = this.menuItems.filter((item) => item.id === id)[0];
  }
}
