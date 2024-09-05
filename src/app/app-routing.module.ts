import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserTableComponent } from './components/user/user-table/user-table.component';
import { UserPageComponent } from './components/user/user-page/user-page.component';

const routes: Routes = [
  { path: "", redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UserTableComponent },
  { path: 'user-page/:id', component: UserPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
