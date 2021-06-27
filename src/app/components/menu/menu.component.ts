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
      {id: 1, name: "Pepperoni Pizza", price: "255,000 vnđ", photoUrl: "assets/img/img-pizza.jpg", description: "Pizza Pepperoni"},
      {id: 2, name: "Amazing Panda", price: "130,000 vnđ", photoUrl: "assets/img/img-kids.jpg", description: "Gấu trúc vui vẻ"},
      {id: 3, name: "Spaghetti Bolognese", price: "190,000 vnđ", photoUrl: "assets/img/img-spaghetti.jpg", description: "Mì Ý bò bằm"},
      {id: 4, name: "Mixed Juices", price: "110,000 vnđ", photoUrl: "assets/img/juices.jpg", description: "Nước ép trái cây tươi"},
      {id: 5, name: "Fruit Yoghurt", price: "100,000 vnđ", photoUrl: "assets/img/yoghurt.jpg", description: "Sữa chua trái cây"},
      {id: 6, name: "Pork Ribs", price: "380,000 vnđ", photoUrl: "assets/img/ribs.jpg", description: "Sườn nướng BBQ"},
      {id: 7, name: "Cajun Chicken Salad", price: "130,000 vnđ", photoUrl: "assets/img/sw.jpg", description: "Salad gà Cajun"},
      {id: 8, name: "Orange Juice", price: "100,000 vnđ", photoUrl: "assets/img/oj.jpg", description: "Nước ép cam"},
      {id: 9, name: "Pistachio & Goat Cheese Wrapped Grapes", price: "210,000 vnđ", photoUrl: "assets/img/img-pistachio.jpg", description: "Hạt dẻ cười phô mai dê cuộn nho"},
      {id: 10, name: "Grilled Salmon", price: "360,000 vnđ", photoUrl: "assets/img/salmon.jpg", description: "Cá hồi nướng"},
      {id: 11, name: "Capuccino", price: "80,000 vnđ", photoUrl: "assets/img/capuccino.jpg", description: "Capuccino"},
      {id: 12, name: "Cold Brew", price: "70,000 vnđ", photoUrl: "assets/img/coffee.jpg", description: "Cafe ủ lạnh"},
      {id: 13, name: "Peppa in the Farm", price: "160,000 vnđ", photoUrl: "assets/img/pepainthefarm.jpg", description: "Nông trại nhà Peppa"},
      {id: 14, name: "Pumpkin Soup", price: "100,000 vnđ", photoUrl: "assets/img/pumpkinsoup.jpg", description: "Súp bí đỏ"},
      {id: 15, name: "4 Cheese Pizza", price: "275,000 vnđ", photoUrl: "assets/img/cheesepizza.jpg", description: "Pizza phô mai (4 loại)"},
      {id: 16, name: "Babyccino", price: "75,000 vnđ", photoUrl: "assets/img/babyccino.jpg", description: "Babyccino"},
      {id: 17, name: "Chocolate Bites", price: "110,000 vnđ", photoUrl: "assets/img/chocbite.jpg", description: "Sô cô la"},
      {id: 18, name: "Steak", price: "380,000 vnđ", photoUrl: "assets/img/steak.jpg", description: "Bít tết bò"},
      {id: 19, name: "Burger", price: "245,000 vnđ", photoUrl: "assets/img/burger.jpg", description: "Burger bò Mỹ"},
      {id: 20, name: "Mac & Cheese", price: "170,000 vnđ", photoUrl: "assets/img/macandcheese.jpg", description: "Delicious mac & cheese"},
      {id: 21, name: "Roasted Chicken", price: "275,000 vnđ", photoUrl: "assets/img/roastedchicken.jpg", description: "Gà nướng"},
    ]

    this.selected = this.menuItems[0]; // init
  }

  passDataToModal(id: number) {
    this.selected = this.menuItems.filter(item => item.id === id)[0];
  }

}
