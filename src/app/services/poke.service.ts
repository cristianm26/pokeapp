import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
  constructor(private http: HttpClient) {}

  getPokemons(page: number = 0): Observable<any> {
    return this.http.get(`${this.baseUrl}/pokemon`, {
      params: { offset: page, limit: 6 },
    });
  }

  getPokeData(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/pokemon/${name}`);
  }
}
