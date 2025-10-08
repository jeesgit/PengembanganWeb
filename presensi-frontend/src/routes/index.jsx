import TabelPresensi from "../components/TabelPresensi";
import ModalEditPresensi from '../components/ModalEditPresensi';
import Login from "../components/Login";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/presensi" element={<TabelPresensi/>} />
                <Route path="/modal-presensi" element={<ModalEditPresensi/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="*" element={<NoMatch/>} />
            </Routes>
        </BrowserRouter>
    )
}

function NoMatch(){
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}