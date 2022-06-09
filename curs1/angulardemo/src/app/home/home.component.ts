import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // template: `
  // <h1>Home</h1>
  // <p>Sunt in componenta home</p>`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title:string = 'Componenta Home';
  user:User = {
    id: 1,
    nume: 'Popescu',
    prenume: 'Dan',
    email:'dan@popescu.ro'
  };
  image:string = 'https://www.cinemascomics.com/wp-content/uploads/2022/05/superman-cameo-marvel.jpg';
  showImage:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  afiseazaImagine(){
    this.showImage = !this.showImage;
  }

}
