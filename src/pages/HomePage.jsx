import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import SearchBar from '../components/SearchBar';
import NotesList from '../components/NotesList';
import { getActiveNotes } from '../utils/local-data';

function HomePage() {
  const [notes] = useState(() => getActiveNotes());
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';

  function onKeywordChange(value) {
    setSearchParams(value ? { keyword: value } : {}, { replace: true });
  }

  const filteredNotes = notes.filter((note) => note.title
    .toLowerCase()
    .includes(keyword.toLowerCase()));

  return (
    <section className="homepage">
      <h2>Catatan Aktif</h2>
      
      <NotesList notes={filteredNotes} />
      <div className="homepage__action">
        <Link className="action" to="/notes/new" title="Tambah catatan">
          <FiPlus />
        </Link>
      </div>
    </section>
  );
}

export default HomePage;
