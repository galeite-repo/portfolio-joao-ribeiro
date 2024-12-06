import { Injectable } from '@angular/core';
import { SanityService } from './sanity.service';
import { Galeria } from '../models/galeria';
import { urlFor } from './sanity.client';
import { catchError, map, Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {

  galeria?: Galeria[]

  constructor(private sanityService: SanityService) { }

  execute(): Observable<Galeria[]> {
    return this.sanityService.getGaleria().pipe(
      map((data: Galeria[]) =>
        data.map((galeria) => ({
          ...galeria,
          fotos: galeria.fotos.map((foto) => ({
            ...foto,
            fotoUrl: urlFor(foto.foto.asset).url() // Gera a URL para cada foto
          }))
        }))
      ),
      tap((galerias) => (this.galeria = galerias)), // Atualiza o estado local
      catchError((err) => {
        console.error('Failed to fetch gallery data:', err);
        return throwError(() => new Error('Unable to load gallery data'));
      })
    );
  }
}
