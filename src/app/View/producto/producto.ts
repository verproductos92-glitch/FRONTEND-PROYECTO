
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ProductoService } from '../../services/productos/productos';
import { Tabla } from '../../Componentes/tabla/tabla';

@Component({
  selector: 'app-producto',
  imports: [Tabla],
  templateUrl: './producto.html',
  styleUrl: './producto.css',
})
export class Producto {

  producto: any[] = [];

  constructor(public productoService: ProductoService) {
    this.productoService.getProducto().subscribe((data: any[]) => {
      this.producto = data;
    });
  }

  verProducto(fila: any) {
    console.log(fila);
  }
}
