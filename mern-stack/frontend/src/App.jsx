import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiswaList from "./components/siswaList.jsx";
import AddSiswa from "./components/AddSiswa.jsx";
import EditSiswa from "./components/editSiswa.jsx";

function App() {
  return (
    <>
      <div className='container'>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<SiswaList/>} ></Route>
              <Route path="/add" element={<AddSiswa/>} ></Route>
              <Route path="/edit/:id" element={<EditSiswa/>} ></Route>
            </Routes>
          </BrowserRouter>
      </div>
    </>
  )
}

export default App;
