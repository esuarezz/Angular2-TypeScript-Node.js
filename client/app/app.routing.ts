import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }   from './components/home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);
