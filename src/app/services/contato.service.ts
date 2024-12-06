import { Injectable } from '@angular/core';
import { SanityService } from './sanity.service';
import { Contato } from '../models/contato';
import { urlFor } from './sanity.client';
import { catchError, map, Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  contato?: Contato

  constructor(private sanityService: SanityService) { }

  execute(): Observable<Contato> {
    return this.sanityService.getContato().pipe(
      map((data: Contato) => ({
        ...data,
      })),
      tap((contato) => (this.contato = contato)),
      catchError((err) => {
        console.error('Failed to fetch contato data:', err);
        return throwError(() => new Error('Unable to load contato data'));
      })
    );
  }
}
