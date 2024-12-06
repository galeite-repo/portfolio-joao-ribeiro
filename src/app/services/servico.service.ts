import { Injectable } from '@angular/core';
import { SanityService } from './sanity.service';
import { Servico } from '../models/servico';
import { urlFor } from './sanity.client';
import { catchError, map, Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  servico?: Servico

  constructor(private sanityService: SanityService) { }

  execute(): Observable<Servico> {
    return this.sanityService.getServicos().pipe(
      map((data: Servico) => ({
        ...data,
        servicos: data.servicos.map((item) => ({
          ...item,
          iconUrl: urlFor(item.icon.asset).url()
        }))
      })),
      tap((servico) => (this.servico = servico)),
      catchError((err) => {
        console.error('Failed to fetch servico data:', err);
        return throwError(() => new Error('Unable to load servico data'));
      })
    );
  }
}
