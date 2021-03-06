import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { PortfolioListComponent } from './portfolio_list/portfolio_list.component';
import { PortfolioPostComponent } from './portfolio_write/portfolio.component';
import { AdminRootComponent } from './admin_root.component';
import { AdminLoginComponent } from './login/admin_login.component';
import { AdminLoginService } from './login/admin_login.service';

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminRootComponent, // 컴포넌트 기준으로 경로가 정해짐. ex) ./portfolio_lit == /admin/portfolio_list
    canActivate: [AdminLoginService],
    canActivateChild: [AdminLoginService],
    children: [
      {
        path: '',
        component: AdminLoginComponent
      },
      {
        path: 'portfolio_write',
        component: PortfolioPostComponent
      },
      {
        path: 'portfolio_list',
        component: PortfolioListComponent
      }
    ]
  }
]
export const adminRouting: ModuleWithProviders = RouterModule.forChild(adminRoutes);
