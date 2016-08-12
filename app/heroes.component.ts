import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  selector: 'my-heroes',
  templateUrl: `app/heroes.component.html`,
  styleUrls: [`app/heroes.component.css`]
})

export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;

    onSelect(hero: Hero) { this.selectedHero = hero; }

constructor(private heroService: HeroService, private router:Router){}

    getHeroes(){
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit(){
        this.getHeroes();
    }

    gotoDetail(){
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}
