import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.css']
})
export class NoteAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ps: NotesService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      NoteId: ['', Validators.required ],
      NoteTitle: ['', Validators.required ],
      NoteDate: ['', Validators.required ]
    });
  }

  addNote(NoteId, NoteName, NoteDate) {
    this.ps.addNote(NoteId, NoteName, NoteDate);
  }

  ngOnInit() {
  }

}