import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { MainVisualComponent } from './client/main_page/main_page.component';
import { AdminRootComponent } from './admin/admin_root.component';
import { ClientRootComponent } from './client/client_root.component';
import { adminRouting } from './admin/admin.routes';

const appRoutes: Routes = [
  {
    path: '',
    component: MainVisualComponent
  }
]
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash:true});
