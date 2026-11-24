import React from "react";
import { useState, useEffect } from "react";
import NotesList from "../components/NotesList";
import { archiveNote, getArchivedNotes } from "../utils/network-data";
import { Link, useSearchParams } from 'react-router-dom';
function ArchivePage(){
 const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';


const [notes, setNotes] = useState([]);
    useEffect(()=>{
        async function getNotes() {
            const {data} = await getArchivedNotes();
            setNotes(data)
        }
        getNotes()
    },[])

     const filteredNotes = notes.filter((note) => note.title
    .toLowerCase()
    .includes(keyword.toLowerCase()));
    return(
        <>
        <h2>Arsip Catatan</h2>
       <NotesList notes={filteredNotes}/>
        </>
    )
}
export default ArchivePage