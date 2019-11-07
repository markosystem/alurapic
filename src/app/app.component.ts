import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alurapic';

  photos = [
    {
      url: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/F767/production/_103953336_de27.jpg',
      description: 'Leoa'
    },
    {
      url: 'https://osegredo.com.br/wp-content/uploads/2018/07/signo-de-leao-830x450.jpg',
      description: 'Leão'
    }
  ];
}
