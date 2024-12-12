import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";  // Your home page
import Moviesdetail from "./Moviesdetail";  // Your movie detail page

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="Moviesdetail/:imdbID" element={<Moviesdetail />} />
            </Routes>
        </Router>
    );
}

export default App;
