import React, {useState, useEffect} from 'react'
import ListItem from '../components/ListItem'
import AddButton from '../components/AddButton'

const NotesListPage = () => {

    let [notes, setNotes] = useState([])

    useEffect(() => {
        getNotes()
    }, [])

    let getNotes = async () => {
        let response = await fetch('/api/notes/')
        let data = await response.json()
        console.log('DATA:', data)
        setNotes(data)
    }
    return (
        <div className="notes">
            <div className="notes-header">
                <h2 className="notes-title">&#9782; DNotes</h2>
                <p className="notes-count">{notes.length}</p>
            </div>
            {notes.length === 0 || notes === null ? 
            (<div className='notes-empty-container'><p className='notes-empty'>You have no notes. 
            press + to create new note</p></div>): 

            <div className="notes-list">
                {notes.map((note, index) => (
                    <ListItem key={index} note={note}/>
                ))}
            </div>
            }
            <AddButton/>
        </div>
    )
}

export default NotesListPage
