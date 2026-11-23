import React, { useState } from 'react';
import { FiCheck } from 'react-icons/fi';

function NoteInput({ addNote }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  function onSubmitHandler() {
    // body disimpan sebagai HTML (innerHTML), cek isi teksnya saja untuk validasi
    const plainBody = body.replace(/<[^>]*>/g, '').trim();
    if (!title.trim() && !plainBody) {
      return;
    }
    addNote({ title, body });
  }

  return (
    <section className="add-new-page__input">
      <input
        className="add-new-page__input__title"
        type="text"
        placeholder="Catatan rahasia"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <div
        className="add-new-page__input__body"
        data-placeholder="Sebenarnya saya adalah ...."
        contentEditable
        onInput={(event) => setBody(event.target.innerHTML)}
      />
      <div className="add-new-page__action">
        <button
          className="action"
          type="button"
          title="Simpan"
          onClick={onSubmitHandler}
        >
          <FiCheck />
        </button>
      </div>
    </section>
  );
}

export default NoteInput;
