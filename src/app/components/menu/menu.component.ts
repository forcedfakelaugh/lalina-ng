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
      {id: 10, name: "Salmon", price: "200,000 vnđ", photoUrl: "assets/img/salmon.jpg", description: "Delicious salmon"},
      {id: 11, name: "Capuccino", price: "200,000 vnđ", photoUrl: "assets/img/capuccino.jpg", description: "Delicious capuccino"},
      {id: 12, name: "Coffee", price: "200,000 vnđ", photoUrl: "assets/img/coffee.jpg", description: "Delicious coffee"},
      {id: 13, name: "Pepa in the Farm", price: "200,000 vnđ", photoUrl: "assets/img/pepainthefarm.jpg", description: "Delicious kids meal"},
      {id: 14, name: "Pumpkin Soup", price: "200,000 vnđ", photoUrl: "assets/img/pumpkinsoup.jpg", description: "Delicious soup"},
      {id: 15, name: "Cheese Pizza", price: "200,000 vnđ", photoUrl: "assets/img/cheesepizza.jpg", description: "Delicious pizza"},
      {id: 16, name: "Babyccino", price: "200,000 vnđ", photoUrl: "assets/img/babyccino.jpg", description: "Delicious drink"},
      {id: 17, name: "Chocolate Bites", price: "200,000 vnđ", photoUrl: "assets/img/chocbite.jpg", description: "Delicious chocolate"},
      {id: 18, name: "Steak", price: "200,000 vnđ", photoUrl: "assets/img/steak.jpg", description: "Delicious steak"},
      {id: 19, name: "Burger", price: "200,000 vnđ", photoUrl: "assets/img/burger.jpg", description: "Delicious burger"},
      {id: 20, name: "Mac & Cheese", price: "200,000 vnđ", photoUrl: "assets/img/macandcheese.jpg", description: "Delicious mac & cheese"},
      {id: 21, name: "Roasted Chicken", price: "200,000 vnđ", photoUrl: "assets/img/roastedchicken.jpg", description: "Delicious chicken"},
    ]

    this.selected = this.menuItems[0]; // init
  }

  passDataToModal(id: number) {
    this.selected = this.menuItems.filter(item => item.id === id)[0];
  }

}
