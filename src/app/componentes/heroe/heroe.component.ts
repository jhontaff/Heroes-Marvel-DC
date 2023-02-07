import { Heroe } from './../../clases/heroe';
import { HeroesService } from './../../servicios/heroes.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  public heroe : Heroe = new Heroe();

  constructor(
    private heroesService : HeroesService,
    private activatedRoute : ActivatedRoute
  ){
    this.activatedRoute.params.subscribe( params => {
      this.heroe = this.heroesService.getHeroe(params['id']);
      //console.log(this.heroe)
    });
  }
}
