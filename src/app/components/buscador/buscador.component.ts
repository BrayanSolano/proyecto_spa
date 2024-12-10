import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes: any[] = [];
  termino: string = '';

  constructor(private activatedRoute: ActivatedRoute, private _heroesService: HeroesService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino']; // Asigna el término para usarlo en la vista
      this.heroes = this._heroesService.buscarHeroes(this.termino);
    });
  }

  verHeroe(idx: Number){
    this.router.navigate(['/heroe', idx ]);
  }
}
