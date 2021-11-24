import {
  HashRouter as Router,
  Route, Routes
} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import NotesListPage from './pages/NotesListPage';
import NotePage from './pages/NotePage';
import {useState} from 'react';
import ThemeToggle from './components/ThemeToggle';



function App() {
  const [theme, setTheme] = useState("dark")
  const themeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }
  return (
    <Router>
      <div className={theme === "light" ? "container" : "container dark" }>
        <div className="app">
        <Header themeToggle={themeToggle} theme={theme}/>
        <Routes>
          <Route path="/" element={<NotesListPage/>}/>
          <Route path="/note/:id" element={<NotePage/>}/>
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
