import React from 'react';
import NoteItem from './NoteItem';

function NotesList({ notes }) {
  if (notes.length === 0) {
    return (
      <section className="notes-list-empty">
        <p>Tidak ada catatan</p>
      </section>
    );
  }

  return (
    <section className="notes-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          id={note.id}
          title={note.title}
          body={note.body}
          createdAt={note.createdAt}
        />
      ))}
    </section>
  );
}

export default NotesList;
