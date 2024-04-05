import {BiSearchAlt2} from "react-icons/bi";

const Navbar = () => {
    return (
        <nav id={"navbar"} className="navbar navbar-dark bg-dark">
            <div className="container">
                <a href="/" className="navbar-brand">
                    MoviesApp
                </a>
                <button type={"submit"}>
                    <BiSearchAlt2/>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;