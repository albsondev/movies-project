import Toast from "../components/Toast.jsx";

const Home = () => {
    return (
        <div>
            <h1>Homes</h1>
            <Toast title={"Novidade!"} message={"Oi, eu sou um lembrete!"} timer={'2 minutos atrás'}/>
        </div>
    );
}

export default Home;