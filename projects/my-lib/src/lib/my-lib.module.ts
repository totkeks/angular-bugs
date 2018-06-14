import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: MyLibComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [MyLibComponent],
  exports: []
})
export class MyLibModule { }
