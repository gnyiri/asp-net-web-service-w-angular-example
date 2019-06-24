import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteAddComponent } from './note-add/note-add.component';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { NoteGetComponent } from './note-get/note-get.component';

const routes: Routes = [
  {
    path: 'note/create',
    component: NoteAddComponent
  },
  {
    path: 'edit/:id',
    component: NoteEditComponent
  },
  {
    path: 'notes',
    component: NoteGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
