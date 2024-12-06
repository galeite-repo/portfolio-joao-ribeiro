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
import { LoadingComponent } from "./components/loading/loading.component";
import { Servico } from './models/servico';
import { Galeria } from './models/galeria';
import { HomeService } from './services/home.service';
import { Observable } from 'rxjs/internal/Observable';
import { LoadingService } from './services/loading.service';
import { SobreService } from './services/sobre.service';
import { ServicoService } from './services/servico.service';
import { GaleriaService } from './services/galeria.service';
import { ContatoService } from './services/contato.service';
import { Contato } from './models/contato';
import { forkJoin } from 'rxjs';

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
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  // home?: Home
  isLoading = true;
  loadingOpacity = 1;
  home?: Home;
  sobre?: Sobre
  servico?: Servico
  galeria?: Galeria[]
  contato?: Contato
  constructor(
    private sanityService: SanityService,
    private homeService: HomeService,
    private sobreService: SobreService,
    private servicoService: ServicoService,
    private galeriaService: GaleriaService,
    private contatoService: ContatoService,
  ) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    forkJoin({
      home: this.homeService.execute(),
      sobre: this.sobreService.execute(),
      servico: this.servicoService.execute(),
      galeria: this.galeriaService.execute(),
      contato: this.contatoService.execute()
    }).subscribe({
      next: (result) => {
        this.home = result.home;
        this.sobre = result.sobre;
        this.servico = result.servico;
        this.galeria = result.galeria;
        this.contato = result.contato;
        // this.isLoading = false; // Carregamento concluído
        setTimeout(() => {
          this.loadingOpacity = 0;
          this.isLoading = false
        }, 1200); // Remove após o fade
      },
      error: (err) => {
        console.error('Failed to load data:', err);
        this.isLoading = false; // Caso ocorra um erro, remova a página de loading
      }
    });
  }

  loadHome() {
    this.homeService.execute().subscribe({
      next: (home) => this.home = home,
      error: (err) => console.error('Erro loading home:', err),
      // complete: () => this.loadingService.hideLoading(),
    });
  }

  loadSobre() {
    this.sobreService.execute().subscribe({
      next: (sobre) => this.sobre = sobre,
      error: (err) => console.error('Erro loading sobre:', err),
    });
  }

  loadServico() {
    this.servicoService.execute().subscribe({
      next: (servico) => this.servico = servico,
      error: (err) => console.error('Erro loading servico:', err),
    });
  }

  loadGaleria() {
    this.galeriaService.execute().subscribe({
      next: (galeria) => this.galeria = galeria,
      error: (err) => console.error('Erro loading galeria:', err),
    });
  }
  loadContato() {
    this.contatoService.execute().subscribe({
      next: (contato) => this.contato = contato,
      error: (err) => console.error("Erro loading contato:", err),
      complete: () => console.log(this.contato)
    })
  }
}
