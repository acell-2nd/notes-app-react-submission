import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import parser from 'html-react-parser';
import { FiArchive, FiInbox, FiTrash2 } from 'react-icons/fi';
import NotFoundPage from './NotFoundPage';
import { showFormattedDate } from '../utils';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import {
  getNote, deleteNote, archiveNote, unarchiveNote,
} from '../utils/network-data';

function DetailPage() {
  const [note, setNote] = useState('')
  const { id } = useParams();
  const [loading , setLoading] = useState(true)
  const navigate = useNavigate();
  
  useEffect(() => {
    async function getDetailNote() {
      const {data} = await getNote(id);
      setNote(data)
      setLoading(false)
    }
    getDetailNote()
  },[])
  

  const onDeleteHandler = async () => {
    const {error}= await deleteNote(id);
    if(!error){
      navigate('/');
    }
  }
  const onArchiveHandler = async () => {
    const {error} = await archiveNote(id);

    if(!error){
      navigate('/')
    }
  }
  const onUnarchivedHandler = async () => {
    const {error} = await unarchiveNote(id)
    if(!error){
      navigate('/notes/archived')
    }
  }

  if(loading){
    return(
     <section className="app-container">
      <p>Loading</p>
     </section>
    )
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
            <button
          className="action"
          type="button"
          title="Archive"
          onClick={()=>note.archived === false? onArchiveHandler() : onUnarchivedHandler()}
        >
          {note.archived === false? <FiArchive  /> : <FiInbox/>}
        </button>
      </div>
    </section>
  );
}

export default DetailPage;
