
import './Show.css'
import HomeBtn from './HomeBtn/HomeBtn'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Show() {

  const [notes, setNotes] = React.useState([]);
  React.useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, []);



  return (
    <div className=' subtitle text-primary'>
      <p>Show Notes:</p>
      <div className='notes-container'>
        {notes.map((note, index) => (
          <div key={index} className='note-card'>
            <h3>{note.title}</h3>
            <p className='data'>{note.description}</p>
            <p className='data'>{note.category}</p>
            <p className='data'>{note.emoji}</p>
            <button className='btn-danger' onClick={() => {
              const updatedNotes = notes.filter((_, i) => i !== index);
              setNotes(updatedNotes);
              localStorage.setItem("notes", JSON.stringify(updatedNotes));
            }}>
              Delete
              </button>
          </div>
        ))}
        {notes.length === 0 && <p className='text-secondary'>No notes available</p>}


      </div>
      <p className='text-secondary'>You can add notes from the Add Notes page.</p>

      <button className='btn btn-primary show-btn' >
        <Link to="/add" className='link'>
          Add Notes
        </Link>
      </button>

      <HomeBtn />
    </div >
  )
}

export default Show