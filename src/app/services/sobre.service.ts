import { Injectable } from '@angular/core';
import { SanityService } from './sanity.service';
import { Sobre } from '../models/sobre';
import { urlFor } from './sanity.client';
import { catchError, map, Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SobreService {

  sobre?: Sobre

  constructor(private sanityService: SanityService) { }

  execute(): Observable<Sobre> {
    return this.sanityService.getSobre().pipe(
      map((data: Sobre) => ({
        ...data,
        fotoUrl: urlFor(data.foto.asset).url(),
        assinaturaUrl: urlFor(data.assinatura.asset).url()
      })),
      tap((sobre) => (this.sobre = sobre)),
      catchError((err) => {
        console.error('Failed to fetch sobre data:', err);
        return throwError(() => new Error('Unable to load sobre data'));
      })
    );
  }
}
