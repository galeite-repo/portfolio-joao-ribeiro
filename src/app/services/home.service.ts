import { Injectable } from '@angular/core';
import { SanityService } from './sanity.service';
import { Home } from '../models/home';
import { urlFor } from './sanity.client';
import { catchError, map, Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  home?: Home

  constructor(private sanityService: SanityService) { }

  execute(): Observable<Home> {
    return this.sanityService.getHome().pipe(
      map((data: Home) => ({
        ...data,
        fotoUrl: urlFor(data.foto.asset).url() 
      })),
      tap((home) => (this.home = home)),
      catchError((err) => {
        console.error('Failed to fetch home data:', err);
        return throwError(() => new Error('Unable to load home data'));
      })
    );
  }
}
