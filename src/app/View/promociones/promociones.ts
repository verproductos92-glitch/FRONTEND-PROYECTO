
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PromocionesService } from '../../services/promociones/promociones';
import { Tabla } from '../../Componentes/tabla/tabla';

@Component({
  selector: 'app-promociones',
  imports: [Tabla],
  templateUrl: './promociones.html',
  styleUrl: './promociones.css',
})
export class Promociones {

  promociones: any[] = [];

  constructor(public promocionesService: PromocionesService) {
    this.promocionesService.getPromociones().subscribe((data: any[]) => {
      this.promociones = data;
    });
  }

  verPromociones(fila: any) {
    console.log(fila);
  }
}
