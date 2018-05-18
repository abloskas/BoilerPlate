import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

  { path: 'pets', component: IndexComponent},
  { path: '', pathMatch: 'full', redirectTo: '/pets'},
  { path: 'pets/new', component: NewComponent},
  { path: "pets/:id", component: ShowComponent},
  { path: 'pets/:id/edit', component: EditComponent},
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

