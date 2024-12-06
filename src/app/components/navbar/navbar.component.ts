import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { SanityService } from '../../services/sanity.service';
import { Home } from '../../models/home';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnChanges {
  @Input() home!: Home;
  iniciais: string = ''
  constructor() { }

  ngOnChanges() {
    this.iniciais = this.getInitials(this.home.nome)
  }

  getInitials(name: string) {
    const nameParts = name.trim().split(' ');
    const initials = nameParts.map(part => part.charAt(0).toUpperCase()).join('');
    return initials;
  }

}
