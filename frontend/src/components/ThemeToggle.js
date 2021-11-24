import React from 'react'
import {ReactComponent as MoonIcon} from '../assets/moon.svg'
import {ReactComponent as SunIcon} from '../assets/sun.svg'



const ThemeToggle = ({themeToggle, theme}) => {
    return (
        <div className='note-header'> <h3>{theme === "light"? (
            <MoonIcon onClick={()=> themeToggle()}/>
            ) :<SunIcon onClick={()=> themeToggle()}/> }</h3>
        </div>
        
    )
}

export default ThemeToggle
