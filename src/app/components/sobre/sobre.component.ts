import { Component, Input, OnChanges } from '@angular/core';
import { Sobre } from '../../models/sobre';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [NgFor],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss'
})
export class SobreComponent implements OnChanges {
  @Input()
  sobre!: Sobre
  ngOnChanges() {
    // this.iniciais = this.getInitials(this.home.nome)
  }
}
