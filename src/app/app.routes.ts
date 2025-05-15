import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { GridComponent } from './grid/grid.component';
import { HGridComponent } from './h-grid/h-grid.component';
import { TGridComponent } from './t-grid/t-grid.component';

export const routes: Routes = [
  { path: '', redirectTo: 'grid', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'grid', component: GridComponent, data: { text: 'Grid' } },
  { path: 'h-grid', component: HGridComponent, data: { text: 'Hgrid' } },
  { path: 't-grid', component: TGridComponent, data: { text: 'Tgrid' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
