import { Component, input, Input, OnChanges, OnInit } from '@angular/core';
import { SanityService } from '../../services/sanity.service';
import { Home } from '../../models/home';
import { NgIf } from '@angular/common';
import { urlFor } from '../../services/sanity.client';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnChanges {
  @Input() home!: Home;
  image?: any

  constructor() { }
  ngOnChanges() {
  }
}
