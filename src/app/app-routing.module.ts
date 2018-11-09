import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { MyLibModule } from 'my-lib';


const routes: Routes = [
  {
    path: ''
  },
  {
    path: 'lib',
    loadChildren: 'my-lib#MyLibModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule { }
