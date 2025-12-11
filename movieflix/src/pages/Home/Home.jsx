import moviesData from '../../mocks/movies.json'
import MovieGrid from '../../components/movieGrid/movieGrid.jsx'
import './Home.css'

const Home = () =>{
    const featuredMovies = moviesData.movies
                            .filter(p => p.featured);

    const top10Movies = moviesData.movies
                            .filter(p => p.top10);

    return(
        <div className='home'>
            <div className='hero-section'>
                <h1>Bem vindo ao MOVIEFLIX!</h1>
                <p>Milhares de filmes para você assistir quando quiser</p>
            </div>

            <MovieGrid movies={top10Movies} title="Top 10" />
            <MovieGrid movies={featuredMovies} title="Em destaque" />
            <MovieGrid movies={moviesData.movies.slice(0, 4)} title="Recomendados" />
        </div>
    );
}

export default Home;