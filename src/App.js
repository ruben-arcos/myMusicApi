import React, { useState } from 'react';
import Header from './components/header';
import SignIn from "./components/signin";
import './App.css';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="App">
      <Header />
      {isLoggedIn ? (
        <p>You are logged in</p>
      ) : (
        < SignIn setIsLoggedIn={setIsLoggedIn}  />
      )
      
      }
    </div>
  );
}

export default App;
