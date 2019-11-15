import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './pages/shared/layout/container/container.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path: '*', redirectTo: '/index.html', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
