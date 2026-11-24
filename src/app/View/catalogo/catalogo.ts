import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ClientesService } from '../../services/clientes';
import { Tabla } from '../../Componentes/tabla/tabla';
 
@Component({
  selector: 'app-clientes',
  imports: [Tabla],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css',
})
export class Clientes implements OnInit {
  data: any[] = [];
 
  constructor(private clientesService: ClientesService, private cdr: ChangeDetectorRef) {}
 
  ngOnInit(): void {
    this.clientesService.getClientes().subscribe((rows: any[]) => {
      this.data = rows;
      this.cdr.detectChanges();
    });
  }
}