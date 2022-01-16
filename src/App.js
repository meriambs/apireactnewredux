import React , {useState} from 'react'

import Navbbar from './Components/Navbbar';
import HomePage from './Components/HomePage';
import Card from './Components/Card';
import ListUser from './Components/ListUser';
import { Routes, Route, Link } from "react-router-dom";
//partie redux 
import { useSelector, useDispatch } from 'react-redux'
import {resetUsersList} from "./store/userListSlice";
//redux part


import './App.css';

function App() {
  const dispatch = useDispatch();

  const [login, setLogin] = useState(false);
  const toggelLogin=()=>{
    if(login){
      //we dispatch a function and not the name of the function 
      //khater reset n'a pas de payload on ne lui donne pas d'argument diff de l'autre . 
      dispatch(resetUsersList())
    }
    setLogin(!login)
  }
  //provider higer compo,nent yekhou children ywliw yhou donnée minha w y3tohom 
  return (
    <div className="App">
      <Navbbar toggelLogin={toggelLogin} login={login}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contactlist" element={<ListUser login={login}/>} />
      </Routes>
    </div>
    
  );
}

export default App;
