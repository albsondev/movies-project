import Toast from "../components/Toast.jsx";
import {useState, useEffect} from "react";

const moviesUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
    const [topMovies, setTopMovies] = useState([]);

    const getTopMovies = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.results);
        setTopMovies(data.results);
    }

    useEffect(() => {
        getTopMovies(`${moviesUrl}/top_rated?api_key=${apiKey}&language=pt-BR&page=1`).then();
    }, []);

    return (
        <div className={'cards-topRated'}>
            <div className={'container-fluid'}>
                {(topMovies.length === 0) &&
                    <div className={'row justify-content-center'}>
                        <div className="spinner-border text-danger text-center" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                }
                <div className="row row-cols-lg-6 row-cols-md-6 col-lg-612 g-4">
                    {topMovies && topMovies.map((movie, index) => {
                            return (
                                <div className={'col'}>
                                    <div className="card" key={index}>
                                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}
                                             className="card-img-top"/>
                                        <div className="card-body">
                                            <h5 className="card-title fs-6">{movie.title}</h5>
                                            <p className="card-text truncate-text">{movie.overview}</p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-body-secondary">Last updated 3 mins ago</small>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    )}
                </div>
                <Toast title={"Novidade!"} message={"Oi, eu sou um lembrete!"} timer={'2 minutos atrás'}/>
            </div>
        </div>
    );
}

export default Home;