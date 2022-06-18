import {useEffect , useState} from 'react';
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import "./styles/Global.css";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [mobile, setMobile] = useState(false);

  return (
    <>
      <Routes> {/* Switch */}
        <Route index element={<Main />} />
        <Route path="/:id/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
