import React from 'react';
import { useNavigate } from 'react-router-dom';
import NoteInput from '../components/NoteInput';
import { addNote } from '../utils/network-data';

function AddPage() {
  const navigate = useNavigate();

  async function onAddNoteHandler(note) {
    const {error} = await addNote(note);
    if(!error){
      navigate('/');
    }
  }

  return (
    <section className="add-new-page">
      <NoteInput addNote={onAddNoteHandler} />
    </section>
  );
}

export default AddPage;
