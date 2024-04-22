import { BiSearchAlt2 } from "react-icons/bi";

const Navbar = () => {
    return (
        <nav id={"navbar"} className="navbar navbar-expand-lg navbar-dark bg-dark shadow border-bottom border-3 border-danger">
            <div className="container">
                <a className="navbar-brand">ALB Films</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <form className="d-flex mx-auto mb-2 mb-lg-0" role="search">
                        <input className="form-control me-2" type="search" placeholder="filmes, séries..." aria-label="Search"/>
                        <button className="btn btn-danger d-inline-flex flex-nowrap align-items-center pe-2" type="submit"> <BiSearchAlt2 className={''}/> Procurar </button>
                    </form>
                    <div className="dropdown">
                        <button className="btn btn-outline-danger border-0 text-white dropdown-toggle" type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                            <img src="https://assets.codepen.io/453795/internal/avatars/users/default.png?fit=crop&format=auto&height=32&version=1579927023&width=32" className="img-fluid border border-2 border-danger rounded-5 me-2" alt="..."/>
                            ANDRÉ ALBSON
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
