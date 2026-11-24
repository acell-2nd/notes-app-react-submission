import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import AddPage from './pages/AddPage';
import NotFoundPage from './pages/NotFoundPage';
import RegisterPage from './pages/RegisterPage';
import { useState, useEffect, useMemo } from 'react';
import LoginPage from './pages/LoginPage';
import { putAccessToken } from './utils/network-data';
import { getUserLogged } from './utils/network-data';
import ArchivePage from './pages/ArchivePage';
import ThemeContext from './context/ThemeContext';
function App() {
  const [authUser, setAuthUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')
  const [userName , setUserName] = useState(null)
const onLogginSuccess = async ({accessToken}) => {
  putAccessToken(accessToken);
  const { name,data} = await getUserLogged()
  setAuthUser(data)
  setUserName(data.name)
}
const onLogout = () => {
  putAccessToken('');
  setAuthUser(null);
};

const toggleTheme = () =>{
  setTheme((prevTheme)=>{
    const newTheme = prevTheme === 'dark'? 'light' : 'dark';
    localStorage.setItem('theme',newTheme);
    return newTheme;
  })
}
const themeContextValue = useMemo(()=>({
  theme,
  toggleTheme,
}), [theme])



useEffect(()=>{
  const getDataUser = async () => {
      const {data, error} = await getUserLogged();
      setAuthUser(data)
      setLoading(false)
      setUserName(data.name)
    if(error){
      setAuthUser(null)
    }
  }
 
  getDataUser();  
},[])

useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

if(loading){
  return(
    <p>Loading....</p>
  )
}
  return (
    <ThemeContext.Provider value={themeContextValue}>
    <div className="app-container">
      {authUser === null ?(
         <Routes>
              <Route path="/*" element={<LoginPage logginSuccess={onLogginSuccess}/>} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
      ):(
        <> 
      <Header nameLogut={'Logout'} logout={onLogout} name={userName}/>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/notes/archived'element = {<ArchivePage/>} />
          <Route path="/notes/new" element={<AddPage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
        </>
      )
          }
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
