import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioModule } from './portfolio/portfolio.module';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    PortfolioModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
