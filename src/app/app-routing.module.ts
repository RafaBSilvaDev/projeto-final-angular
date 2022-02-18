import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaCrudComponent } from './pagina-crud/pagina-crud.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';

const routes: Routes = [{
  path: 'principal/crud',
  component: PaginaCrudComponent
},
{
  path: '**',
  component: PaginaPrincipalComponent
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
