
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

export interface Producto {

  id: number;

  nombre: string;

  descripcion: string;

  precio: number;

}

export type DatosProducto = Omit<Producto, 'id'>;

@Injectable({

  providedIn: 'root',

})

export class ProductoService {

  private readonly url = 'http://localhost:3000/api/v1/producto';

  constructor(private http: HttpClient) {}

  // Obtener todos los productos

  public getProducto(): Observable<Producto[]> {

    return this.http.get<Producto[]>(this.url);

  }

  // Obtener un producto por ID

  getProductoById(id: number): Observable<Producto> {

    return this.http.get<Producto>(`${this.url}/${id}`);

  }

  // Crear un producto

  crearProducto(producto: DatosProducto): Observable<Producto> {

    return this.http.post<Producto>(this.url, producto);

  }

  // Actualizar completamente un producto

  actualizarProducto(id: number, producto: DatosProducto): Observable<Producto> {

    return this.http.put<Producto>(`${this.url}/${id}`, producto);

  }

  // Actualizar parcialmente un producto

  actualizarParcialProducto(id: number, producto: Partial<DatosProducto>): Observable<Producto> {

    return this.http.patch<Producto>(`${this.url}/${id}`, producto);

  }

  // Eliminar un producto

  eliminarProducto(id: number): Observable<void> {

    return this.http.delete<void>(`${this.url}/${id}`);

  }

}
