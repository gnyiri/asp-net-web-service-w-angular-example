import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteAddComponent } from './note-add/note-add.component';
import { NoteGetComponent } from './note-get/note-get.component';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { NotesService } from './notes.service';

@NgModule({
  declarations: [
    AppComponent,
    NoteAddComponent,
    NoteGetComponent,
    NoteEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
