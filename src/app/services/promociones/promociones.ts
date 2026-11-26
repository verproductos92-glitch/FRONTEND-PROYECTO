
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

export interface Promociones {

  id: number;

  promocion: string;

  descripcion: string;

  descuento: number;

}

export type DatosPromociones = Omit<Promociones, 'id'>;

@Injectable({

  providedIn: 'root',

})

export class PromocionesService {

  private readonly url = 'http://localhost:3000/api/v1/promociones';

  constructor(private http: HttpClient) {}

  // Obtener todas las promociones

  public getPromociones(): Observable<Promociones[]> {

    return this.http.get<Promociones[]>(this.url);

  }

  // Obtener una promoción por ID

  getPromocionesById(id: number): Observable<Promociones> {

    return this.http.get<Promociones>(`${this.url}/${id}`);

  }

  // Crear una promoción

  crearPromociones(promocion: DatosPromociones): Observable<Promociones> {

    return this.http.post<Promociones>(this.url, promocion);

  }

  // Actualizar completamente una promoción

  actualizarPromociones(id: number, promocion: DatosPromociones): Observable<Promociones> {

    return this.http.put<Promociones>(`${this.url}/${id}`, promocion);

  }

  // Actualizar parcialmente una promoción

  actualizarParcialPromociones(id: number, promocion: Partial<DatosPromociones>): Observable<Promociones> {

    return this.http.patch<Promociones>(`${this.url}/${id}`, promocion);

  }

  // Eliminar una promoción

  eliminarPromociones(id: number): Observable<void> {

    return this.http.delete<void>(`${this.url}/${id}`);

  }

}
