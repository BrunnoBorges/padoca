import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./views/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'home', loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'products', loadChildren: () => import('./views/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'header', loadChildren: () => import('./components/header/header.module').then(m => m.HeaderModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }