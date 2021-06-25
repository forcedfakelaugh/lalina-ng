import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems: MenuItem[] = [];
  selected!: MenuItem;

  constructor() { }

  ngOnInit(): void {
    this.menuItems = [
      {id: 1, name: "Pepperoni Pizza", price: "180,000 vnđ", photoUrl: "assets/img/img-pizza.jpg", description: "Delicious pizza"},
      {id: 2, name: "Amazing Panda", price: "120,000 vnđ", photoUrl: "assets/img/img-kids.jpg", description: "Delicious kids meal"},
      {id: 3, name: "Spaghetti", price: "130,000 vnđ", photoUrl: "assets/img/img-spaghetti.jpg", description: "Delicious dish"},
      {id: 4, name: "Juices", price: "130,000 vnđ", photoUrl: "assets/img/juices.jpg", description: "Delicious juice"},
      {id: 5, name: "Yoghurt", price: "70,000 vnđ", photoUrl: "assets/img/yoghurt.jpg", description: "Delicious yoghurt"},
      {id: 6, name: "Ribs", price: "180,000 vnđ", photoUrl: "assets/img/ribs.jpg", description: "Delicious dish"},
      {id: 7, name: "Sandwich", price: "130,000 vnđ", photoUrl: "assets/img/sw.jpg", description: "Delicious sandwich"},
      {id: 8, name: "Orange Juice", price: "70,000 vnđ", photoUrl: "assets/img/oj.jpg", description: "Delicious juice"},
      {id: 9, name: "Pistachio", price: "100,000 vnđ", photoUrl: "assets/img/img-pistachio.jpg", description: "Delicious snack"},
    ]

    this.selected = this.menuItems[0]; // init
  }

  passDataToModal(id: number) {
    this.selected = this.menuItems.filter(item => item.id === id)[0];
  }

}
