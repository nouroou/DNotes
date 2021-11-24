import React from 'react'
import ThemeToggle from './ThemeToggle'

const Header = ({themeToggle, theme}) => {
    return (
        <div className='app-header'>
            <h1>Notes List</h1>
            <div><ThemeToggle themeToggle={themeToggle} theme={theme}/></div>
        
        </div>
    )
}

export default Header
