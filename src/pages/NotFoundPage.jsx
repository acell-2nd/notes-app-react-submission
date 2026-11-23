import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage({ message = 'Halaman tidak ditemukan' }) {
  return (
    <section className="notes-list-empty">
      <p>{message}</p>
      <p><Link to="/">Kembali ke beranda</Link></p>
    </section>
  );
}

export default NotFoundPage;
