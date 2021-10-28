import { Component, OnInit } from '@angular/core';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent implements OnInit {
  pokeList: Array<any> = [];
  page: number = 0;

  constructor(private pokeService: PokeService) {
    this.setData();
  }
  setData() {
    this.pokeService.getPokemons(this.page).subscribe((data) => {
      this.pokeList = data.results;
    });
  }

  nextPage() {
    this.page += 8;
    this.setData();
  }

  prevPage() {
    this.page -= 8;
    this.setData();
  }

  ngOnInit(): void {}
}
