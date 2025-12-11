import './MovieGrid.css'
import {MovieCard} from '../movieCard/MovieCard.jsx';

const MovieGrid = ({movies, title}) =>{
    return(
        <div className="movie-grid-section">
            {title && <h2 className="section-title">{title}</h2>}
            <div className="movie-grid">
                {movies.map( movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default MovieGrid;