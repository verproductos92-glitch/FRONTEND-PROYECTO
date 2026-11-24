import { Routes } from '@angular/router';
import { Producto } from './View/producto/producto';
import { Promociones } from './View/promociones/promociones';
import { Clientes } from './View/catalogo/catalogo';
import { Login } from './View/login/login';


export const routes: Routes = [
    { path: '', redirectTo: 'promociones', pathMatch: 'full'},
    { path: 'producto', component: Producto},
    { path: 'promociones', component: Promociones},
    { path: 'catalogo', component: Clientes},
    { path: 'login', component: Login }
];
