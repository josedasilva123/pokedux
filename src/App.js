import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import "./styles/Global.css";

function App() {
  return (
    <>
      <Routes> {/* Switch */}
        <Route index element={<Main />} />
        <Route path="/:id" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
