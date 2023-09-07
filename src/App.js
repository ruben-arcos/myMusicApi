import React, { useState } from "react";
import Header from "./components/header";
import SignIn from "./components/signin";
import "./App.css";
import OnlineMode from "./components/onlineMode";
import MasterVolume from "./components/masterVolume";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const [volume, setVolume] = useState(20);

  return (
    <div className="App">
      <Header />
      {isLoggedIn ? (
        <>
          <div className="boxContainer">
            <OnlineMode isOnline={isOnline} setIsOnline={setIsOnline} />
            <MasterVolume volume={volume} setVolume={setVolume} />
          </div>

          <div className="notify">
            <h3>system notifications</h3>
            {!isOnline && (
              <p>
                your application is offline. you won't be able to share or
                stream music to other devices
              </p>
            )}
          </div>
        </>
      ) : (
        <SignIn setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;
