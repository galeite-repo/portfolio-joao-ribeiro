import { Component, Input, OnInit } from '@angular/core';
import { Foto, Galeria } from '../../models/galeria';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss'
})
export class GaleriaComponent implements OnInit {

  @Input()
  galeria!: Galeria[]
  fotos!: any;

  filteredData = this.galeria;
  selectedCategory: string | null = null;

  ngOnInit(): void {
    this.filterByCategory(this.galeria[0].categoria);
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    this.filteredData = this.galeria.filter(
      (item) => item.categoria === category
    );
    this.fotos = this.filteredData.map((item: any) => item.fotos).flat();

  }
}
