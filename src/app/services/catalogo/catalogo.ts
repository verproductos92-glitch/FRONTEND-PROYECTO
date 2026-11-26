import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
 
export interface Catalogo {

  id: number;

  producto: string;

  especificaciones: string;

  precio: number;

}
 
export type DatosCatalogo = Omit<Catalogo, 'id'>;
 
@Injectable({

  providedIn: 'root',

})

export class CatalogoService {
 
  private readonly url = 'http://localhost:3000/api/v1/catalogo';
 
  constructor(private http: HttpClient) {}
 
  // Obtener todo el catálogo

  public getCatalogo(): Observable<Catalogo[]> {

    return this.http.get<Catalogo[]>(this.url);

  }
 
  // Obtener un producto por ID

  getCatalogoById(id: number): Observable<Catalogo> {

    return this.http.get<Catalogo>(`${this.url}/${id}`);

  }
 
  // Crear un producto

  crearCatalogo(producto: DatosCatalogo): Observable<Catalogo> {

    return this.http.post<Catalogo>(this.url, producto);

  }
 
  // Actualizar completamente un producto

  actualizarCatalogo(id: number, producto: DatosCatalogo): Observable<Catalogo> {

    return this.http.put<Catalogo>(`${this.url}/${id}`, producto);

  }
 
  // Actualizar parcialmente un producto

  actualizarParcialCatalogo(id: number, producto: Partial<DatosCatalogo>): Observable<Catalogo> {

    return this.http.patch<Catalogo>(`${this.url}/${id}`, producto);

  }
 
  // Eliminar un producto

  eliminarCatalogo(id: number): Observable<void> {

    return this.http.delete<void>(`${this.url}/${id}`);

  }

}
 