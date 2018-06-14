import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyLibComponent } from 'my-lib';

const routes: Routes = [
  {
    path: 'lazy',
    loadChildren: 'my-lib#MyLibModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
