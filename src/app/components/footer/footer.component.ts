import { Component, Input, OnChanges } from '@angular/core';
import { Contato } from '../../models/contato';
import { Home } from '../../models/home';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnChanges{
  @Input() contato!: Contato;
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
