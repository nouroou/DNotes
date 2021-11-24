import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'

const NotePage = () => {

    const params = useParams()
    const nagivate = useNavigate()


    let [note, setNote] = useState(null)

    useEffect(()=> {
        getNote()
    }, [params.id])


    let getNote = async ()=> {
        if (params.id === 'new') return 

        let response = await fetch(`/api/notes/${params.id}/`)
        let data = await response.json()
        setNote(data)
    }

    let updateNote = async ()=> {
        fetch(`/api/notes/${params.id}/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }

    let createNote = async ()=> {
        fetch(`/api/notes/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }

    let deleteNote = async ()=> {
        fetch(`/api/notes/${params.id}/`, {
            method: "DELETE",
            'headers': {
                'Content-Type': 'application/json'
            },
        })
        nagivate('/')
    }

    let handleSubmit = ()=> {
        if(params.id !== 'new' && note.body === '') {
            console.log('NOTE DELETE METHOD TRIGGERED')
            deleteNote()
        } else if (params.id !== 'new') {
            updateNote()
        } else if (params.id === 'new' && note.body !== null) {
            createNote()
        }
        nagivate('/')
    }

    let handleChange = (value)=> {
        setNote(note => ({...note, 'body': value}))
        
    }

    return (
        <div className="note">
            <div className='note-header'>
                <h3>
                        <ArrowLeft onClick={handleSubmit}/>
                </h3>
                {params.id !== 'new' ? (
                    <button onClick={deleteNote}>Delete</button>
                ): <button onClick={handleSubmit}>Done</button>}
                
            </div>
            <textarea onChange={(e) => {handleChange(e.target.value)}} value={note?.body}></textarea>
        </div>
    )
}

export default NotePage