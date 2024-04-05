import './App.css'
import {Link, Outlet} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <nav>
                <Link to="/">Home</Link>
                <span> | </span>
                <Link to="/search">Search</Link>
                <span> | </span>
                <Link to="/movie/1">Movie Teste</Link>
            </nav>
            <hr/>
            <h2>
                Find your favorite movie
            </h2>
            <hr/>
            <Outlet/>
        </div>
    )
}

export default App
