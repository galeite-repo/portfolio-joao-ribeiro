import { Component, Input } from '@angular/core';
import { Servico } from '../../models/servico';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [NgFor],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.scss'
})
export class ServicosComponent {

  @Input()
  servico!: Servico

}
