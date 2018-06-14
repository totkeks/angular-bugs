import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyLibComponent } from 'my-lib';

const routes: Routes = [
  {
    path: '',
    component: MyLibComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
