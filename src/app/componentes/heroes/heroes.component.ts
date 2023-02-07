import { Heroe } from './../../clases/heroe';
import { HeroesService } from './../../servicios/heroes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes : Heroe[] = [] ;
  constructor(
    private heroeService : HeroesService,
  ) { }

  ngOnInit() : void {

    this.heroes = this.heroeService.getHeroes()
  }
}
