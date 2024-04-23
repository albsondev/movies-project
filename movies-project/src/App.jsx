import './App.css'
import {Link, Outlet} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <nav id={'categories'} className={'bg-black d-block py-1 px-4'}>
                <Link className={'mx-3'} to="/">Home</Link>
                {['Ação', 'Aventura', 'Comédia', 'Drama', 'Horror', 'Novidades'].map((category, index) => {
                    return (
                        <Link className={'mx-3'} key={index} to={`/category/${category.toLowerCase()}`}>{category}</Link>
                    )
                }
                )}
                <Link className={'mx-3'} to="/movie/1">Movie Teste</Link>
            </nav>
            <div className="container-fluid">
                <h2>
                    Find your favorite movie
                </h2>
                <hr/>
                <Outlet/>
            </div>
        </div>
    )
}

export default App
