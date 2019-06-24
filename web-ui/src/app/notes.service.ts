import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  uri = 'https://localhost:44392/api/note';

  constructor(private http: HttpClient) { }

  addNote(NoteId, NoteTitle, NoteDate) {
    const obj = {
      NoteId,
      NoteTitle,
      NoteDate
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }
}
