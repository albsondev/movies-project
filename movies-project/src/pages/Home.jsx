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
        <div>
            <h1>Home</h1>
            {topMovies && topMovies.map((movie, index) => {
                    return (
                        <div key={index}>
                            <h2>{movie.title}</h2>
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>
                            <p>{movie.overview}</p>
                        </div>
                    )
                }
            )}
            <Toast title={"Novidade!"} message={"Oi, eu sou um lembrete!"} timer={'2 minutos atrás'}/>
        </div>
    );
}

export default Home;