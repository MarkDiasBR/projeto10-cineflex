import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage"
import SessionsPage from "./pages/SessionsPage/SessionsPage"
import SeatsPage from "./pages/SeatsPage/SeatsPage"
import SuccessPage from "./pages/SuccessPage/SuccessPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/sessoes/:idFilme" element={<SessionsPage /> }/>
                <Route path="/assentos/:idSessao" element={<SeatsPage />}/>
                <Route path="/sucesso" element={<SuccessPage />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;