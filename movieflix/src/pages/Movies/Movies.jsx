import moviesData from '../../mocks/movies.json'
import MovieGrid from '../../components/movieGrid/movieGrid.jsx'
import './Movies.css'

const Movies = () =>{
    return(
        <div className="movies-page">
            <div className="page-header">
                <h1>Todos os Filmes</h1>
            </div>
            <MovieGrid movies={moviesData.movies} />
        </div>
    );
}

export default Movies;