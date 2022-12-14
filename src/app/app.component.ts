import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cost = 2000;
  name = 'adrien';
  fontSize = 16;
  blueClass = false;
  temperature = 25.3;
  currentDate = new Date();
  imgURL = 'https://picsum.photos/id/237/500/500';
  images = [
    'https://picsum.photos/id/236/500/500',
    'https://picsum.photos/id/231/500/500',
    'https://picsum.photos/id/22/500/500',
    'https://picsum.photos/id/247/500/500',
    'https://picsum.photos/id/247/500/500',
    'https://picsum.photos/id/1/500/500'
  ];
  pizza = {
    toppings: ['pepperoni', 'bacon'],
    size: 'large'
  }

  changeImage(e: KeyboardEvent) {
    this.imgURL = (e.target as HTMLInputElement).value;
  }

  logImg(event: string) {
    console.log(event);
  }
}
