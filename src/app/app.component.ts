import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HeaderComponent } from "./components/header/header.component";
import { SobreComponent } from "./components/sobre/sobre.component";
import { ServicosComponent } from "./components/servicos/servicos.component";
import { GaleriaComponent } from "./components/galeria/galeria.component";
import { ContatoComponent } from "./components/contato/contato.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SanityService } from './services/sanity.service';
import { Home } from './models/home';
import { CommonModule } from '@angular/common';
import { urlFor } from './services/sanity.client';
import { Sobre } from './models/sobre';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    HeaderComponent,
    SobreComponent,
    ServicosComponent,
    GaleriaComponent,
    ContatoComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  home?: Home
  sobre?: Sobre
  constructor(private sanityService: SanityService) { }

  ngOnInit() {
    this.loadHeader();
    this.loadSobre();
  }

  loadHeader() {
    this.sanityService.getHome().subscribe({
      next: (data: Home) => {
        this.home = data;
        this.home.fotoUrl = urlFor(this.home.foto.asset).url();
      },
      error: (err) => console.log(err)
    });
  }

  loadSobre() {
    this.sanityService.getSobre().subscribe({
      next: (data: Sobre) => {
        this.sobre = data;
        this.sobre.fotoUrl = urlFor(this.sobre.foto.asset).url();
        this.sobre.assinaturaUrl = urlFor(this.sobre.assinatura.asset).url();
      },
      error: (err) => console.log(err)
    });
  }
}
