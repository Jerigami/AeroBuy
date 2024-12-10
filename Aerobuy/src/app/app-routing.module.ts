import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab9',
    loadChildren: () => import('./tab9/tab9.module').then( m => m.Tab9PageModule)
  },
  {
    path: 'tab10',
    loadChildren: () => import('./tab10/tab10.module').then( m => m.Tab10PageModule)
  },
  {
    path: 'tab11',
    loadChildren: () => import('./tab11/tab11.module').then( m => m.Tab11PageModule)
  },
  {
    path: 'tab12',
    loadChildren: () => import('./tab12/tab12.module').then( m => m.Tab12PageModule)
  },
  {
    path: 'tab16',
    loadChildren: () => import('./tab16/tab16.module').then( m => m.Tab16PageModule)
  },
  {
    path: 'tab17',
    loadChildren: () => import('./tab17/tab17.module').then( m => m.Tab17PageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
