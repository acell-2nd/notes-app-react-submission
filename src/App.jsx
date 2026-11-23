import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import AddPage from './pages/AddPage';
import NotFoundPage from './pages/NotFoundPage';
import RegisterPage from './pages/RegisterPage';
import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import { putAccessToken } from './utils/network-data';
import { useEffect } from 'react';
import { getUserLogged } from './utils/network-data';

function App() {
  const [authUser, setAuthUser] = useState(null)
  const [loading, setLoading] = useState(true)

const onLogginSuccess = async ({accessToken}) => {
  putAccessToken(accessToken);
  const {data} = await getUserLogged()
  setAuthUser(data)
}

useEffect(()=>{
  const getDataUser = async () => {
      const {data, error} = await getUserLogged();
      setAuthUser(data)
      setLoading(false)
    if(error){
      setAuthUser(null)
    }
  }

  getDataUser();  
},[])


if(loading){
  return(
    <p>Loading....</p>
  )
}
  if(authUser === null){
    return(
       <main>
            <Routes>
              <Route path="/*" element={<LoginPage logginSuccess={onLogginSuccess}/>} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </main>
    )
  }

  return (
    <div className="app-container">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes/new" element={<AddPage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
