import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent  implements OnInit {

  heroes:Heroe[]=[]

  // importamos el servicio 
  constructor(  private _heroesService: HeroesService, private router:Router){
    // console.log("constructor")
  }

  ngOnInit(): void {
    this.heroes= this._heroesService.getHeroes();

    // console.log(this.heroes)
  }

  verHeroe(idx: Number){
    this.router.navigate(['/heroe',idx    ]);
  }

}
