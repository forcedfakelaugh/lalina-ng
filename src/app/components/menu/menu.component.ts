import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.menuItems = [
      {id: 1, name: "Pepperoni Pizza", price: "180,000 vnđ", photoUrl: "assets/img/img-pizza.jpg", description: "Delicious pizza"},
      {id: 2, name: "Amazing Panda", price: "120,000 vnđ", photoUrl: "assets/img/img-kids.jpg", description: "Delicious kids meal"},
      {id: 3, name: "Spaghetti", price: "130,000 vnđ", photoUrl: "assets/img/img-spaghetti.jpg", description: "Delicious dish"},
      {id: 3, name: "Juices", price: "130,000 vnđ", photoUrl: "assets/img/juices.jpg", description: "Delicious juice"},
      {id: 3, name: "Yoghurt", price: "70,000 vnđ", photoUrl: "assets/img/yoghurt.jpg", description: "Delicious yoghurt"},
      {id: 3, name: "Ribs", price: "180,000 vnđ", photoUrl: "assets/img/ribs.jpg", description: "Delicious dish"},
      {id: 3, name: "Sandwich", price: "130,000 vnđ", photoUrl: "assets/img/sw.jpg", description: "Delicious sandwich"},
      {id: 3, name: "Orange Juice", price: "70,000 vnđ", photoUrl: "assets/img/oj.jpg", description: "Delicious juice"},
      {id: 3, name: "Pistachio", price: "100,000 vnđ", photoUrl: "assets/img/img-pistachio.jpg", description: "Delicious snack"},
    ]
  }

}
