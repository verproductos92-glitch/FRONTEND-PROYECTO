import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CatalogoService } from '../../services/catalogo/catalogo';
import { Tabla } from '../../Componentes/tabla/tabla';
@Component({
  selector: 'app-catalogo',
  imports: [Tabla],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css',
})
export class Catalogo {
 
catalogo: any[] = [];
 
  constructor(public catalogoService: CatalogoService) {
    this.catalogoService.getCatalogo().subscribe((data: any[]) => {
      this.catalogo = data;
    });
  }
 
  verCatalogo(fila: any) {
    console.log(fila);
  }
}