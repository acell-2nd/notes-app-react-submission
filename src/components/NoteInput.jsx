import React, { useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import useInput from './useInput';

function NoteInput({ addNote }) {
  const [title, handChangeTitle] = useInput('');
  const [body, handChangeBody] = useInput('');

  function onSubmitHandler() {
  
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
        onChange={handChangeTitle}
      />
      <div
        className="add-new-page__input__body"
        data-placeholder="Sebenarnya saya adalah ...."
        contentEditable
        onInput={handChangeBody}
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
