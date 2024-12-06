import { Injectable } from '@angular/core';
import { client, urlFor } from './sanity.client';
import { Home } from '../models/home';
import { from, Observable } from 'rxjs';
import { Sobre } from '../models/sobre';
import { Servico } from '../models/servico';
import { Galeria } from '../models/galeria';

@Injectable({
  providedIn: 'root'
})
export class SanityService {
  data?: any;
  constructor() { }


  getHome(): Observable<Home> {
    return from(client.fetch('*[_type == "home"][0]'));
  }

  getSobre(): Observable<Sobre> {
    return from(client.fetch('*[_type == "sobre"][0]'))
  }

  getServicos(): Observable<Servico> {
    return from(client.fetch('*[_type == "servicos"][0]'))
  }
  getGaleria(): Observable<Galeria[]> {
    return from(client.fetch('*[_type == "galeria"]'))
  }
}
