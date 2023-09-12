import React, { useState } from "react";
import Header from "./components/header";
import SignIn from "./components/signin";
import "./App.css";
import OnlineMode from "./components/onlineMode";
import MasterVolume from "./components/masterVolume";
import SoundQuality from "./components/soundQuality";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const [volume, setVolume] = useState(20);
  const [quality, setQuality] = useState(2); // Define quality state

  return (
    <div className="App">
      <Header />
      {isLoggedIn ? (
        <>
          <div className="welcome">
            <h1>Welcome User</h1>
          </div>

          <div className="boxContainer">
            <OnlineMode isOnline={isOnline} setIsOnline={setIsOnline} />
            <MasterVolume volume={volume} setVolume={setVolume} />
            <SoundQuality quality={quality} setQuality={setQuality} />
          </div>

          <div className="notify">
            <h3>
              System Notifications:{" "}
              {!isOnline && (
                <span className="notification-message">
                  Your application is offline. You won't be able to share or
                  stream music to other devices.
                </span>
              )}
              {volume > 80 && (
                <span className="notification-message">
                  Listening to music at a high volume could cause long-term hearing loss.
                </span>
              )}
            </h3>
          </div>
        </>
      ) : (
        <SignIn setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;
