import { Component, OnInit } from '@angular/core';
import { Padre } from '../../models/padre';
import { PadreService } from '../../services/padre.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent implements OnInit{

  padres: Padre[] = [];

  constructor(private padreService: PadreService){}
  ngOnInit(): void {
    this.padreService.getPadres().subscribe(padre => this.padres = padre)
  }

}
