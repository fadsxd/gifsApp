import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  constructor(private gifsService:GifsService){}

  get gifs(){
    return this.gifsService.gifList;
  }

}
