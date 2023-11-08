import "./App.css";
import Timer from "./components/Timer";
import SettingsScreen from "./components/SettingsScreen";
import { useState } from "react";
import SettingsContext from "./components/SettingsContext";

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [worksTime, setWorksTime] = useState(25);
  const [breaksTime, setBreaksTime] = useState(5);

  return (
    <main className="App">
      <h1>Pomodoro Timer</h1>
      <SettingsContext.Provider value={ {
        worksTime , 
        breaksTime,
        setWorksTime,
        setBreaksTime,
        showSettings,
        setShowSettings
      }}>
        {showSettings ? <SettingsScreen /> : <Timer />} 
      </SettingsContext.Provider>
    </main>
  );
}

export default App;
