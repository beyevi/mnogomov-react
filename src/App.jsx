import Sidebar from "./Sidebar/Sidebar.jsx";
import Lesson from "./Lesson/Lesson.jsx";
import Unit from "./Unit/Unit.jsx";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <>
      <Sidebar></Sidebar>
      <Unit></Unit>
      <Unit></Unit>
      <Unit></Unit>
    </>
  );
}

export default App
