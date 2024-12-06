import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';
import { catchError, map, Observable } from 'rxjs';
import { from } from 'rxjs/internal/observable/from';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  sendEmail(nome: string, whatsapp: string, email: string, comentario: string): Observable<any> {
    const templateParams = {
      nome: nome,
      whatsapp: whatsapp,
      email: email,
      comentario: comentario
    };

    return from(emailjs.send('service_b4yaf5w', 'template_1lql6wy', templateParams, 'OySYXJYV4a40YDe4B')).pipe(
      map(response => {
        console.log('E-mail enviado com sucesso:', response);
        return response;
      }),
      catchError(error => {
        console.log('Erro ao enviar o e-mail:', error);
        throw error;
      })
    );
  }
}
