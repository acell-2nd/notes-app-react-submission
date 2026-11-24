import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import SearchBar from '../components/SearchBar';
import NotesList from '../components/NotesList';
import { getActiveNotes } from '../utils/network-data';
import { useEffect } from 'react';

function HomePage() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true)
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';

  useEffect(() => {
    async function getNotes() {
      const {data, error} = await getActiveNotes();
      setNotes(data)
      setLoading(false)
    }

    getNotes();
  },[])
  function onKeywordChange(value) {
    setSearchParams(value ? { keyword: value } : {}, { replace: true });
  }

  const filteredNotes = notes.filter((note) => note.title
    .toLowerCase()
    .includes(keyword.toLowerCase()));

     if (loading) {
    return (
      <section className="homepage">
        <p>Memuat catatan...</p>
      </section>
    );
  }
  return (
    <section className="homepage">
      <h2>Catatan Aktif</h2>
    <SearchBar keyword={keyword} keywordChange={onKeywordChange}/>
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
