import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import parser from 'html-react-parser';
import { FiArchive, FiInbox, FiTrash2 } from 'react-icons/fi';
import NotFoundPage from './NotFoundPage';
import { showFormattedDate } from '../utils';
import {
  getNote, deleteNote, archiveNote, unarchiveNote,
} from '../utils/local-data';

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = getNote(id);

  if (!note) {
    return <NotFoundPage message="Catatan tidak ditemukan" />;
  }

  function onDeleteHandler() {
    deleteNote(id);
    navigate('/');
  }

  function onArchiveToggleHandler() {
    if (note.archived) {
      unarchiveNote(id);
      navigate('/');
    } else {
      archiveNote(id);
      navigate('/archives');
    }
  }

  return (
    <section className="detail-page">
      <h3 className="detail-page__title">{note.title}</h3>
      <p className="detail-page__createdAt">{showFormattedDate(note.createdAt)}</p>
      <div className="detail-page__body">{parser(note.body)}</div>
      <div className="detail-page__action">
            <button
          className="action"
          type="button"
          title="Hapus"
          onClick={onDeleteHandler}
        >
          <FiTrash2 />
        </button>
      </div>
    </section>
  );
}

export default DetailPage;
