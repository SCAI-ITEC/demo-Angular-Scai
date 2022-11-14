import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RefCreateViewComponent } from './components/ref-create-view/ref-create-view.component';
import { RefManageViewComponent } from './components/ref-manage-view/ref-manage-view.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { 
    path: 'homepage',
    component: HomepageComponent,
    children: [
      {
        path: '',
        redirectTo: 'crea',
        outlet: 'referente',
        pathMatch: 'full'
      },
      {
        path: 'crea',
        component: RefCreateViewComponent,
        outlet: 'referente'
      },
      {
        path: 'gestisci',
        component: RefManageViewComponent,
        outlet: 'referente'
      },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
