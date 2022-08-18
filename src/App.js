import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import MeetingPage from "./Pages/MeetingPage";
import MeetingEndingPage from "./Pages/MeetingEndingPage";
import { useState } from "react";

function App() {
  const [meetLink, setMeetLink] = useState(
    ""
  );
  const [name, setName] = useState("");
  const [meetings, setMeetings] = useState([]);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          exact
          element={
            <LandingPage
              meetLink={meetLink}
              setMeetLink={setMeetLink}
              name={name}
              setName={setName}
              setMeetings={setMeetings}
              meetings={meetings}
            />
          }
        />
        <Route
          path="/meeting"
          element={<MeetingPage meetLink={meetLink} name={name} />}
        />
        <Route path="/meetEnding" element={<MeetingEndingPage />} />
      </Routes>
    </div>
  );
}

export default App;
