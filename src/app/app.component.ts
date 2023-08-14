import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = "Tomas";
  age = 18;
  img = "https://i.blogs.es/aaaaee/greg/450_1000.webp";
  btnDisabled = true;
  person = {
    name: 'Tomas',
    age: 18,
    avatar: "https://i.blogs.es/aaaaee/greg/450_1000.webp"
  }
  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }
  increaseAge() {
    this.person.age++;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }



}
