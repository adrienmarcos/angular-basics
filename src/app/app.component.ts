import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cost = 2000;
  name = 'adrien';
  blueClass = false;
  temperature = 25.3;
  currentDate = new Date();
  imgURL = 'https://picsum.photos/id/237/500/500';
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
