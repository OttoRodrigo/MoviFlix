import { useNavigate } from 'react-router-dom';
import './MovieCard.css'

export function MovieCard({movie}){

    const navigate = useNavigate();

    const handleClick = () =>{
        navigate(`/movies/${movie.id}`)
    }

    return(
        <div className="movie-card" onClick={handleClick} style={{cursor: 'pointer'}}>
            <div className="movie-image">
                <img src={movie.image} alt={movie.title} />
                <div className="movie-overlay">
                    <button className="play-button">▶</button>
                </div>
            </div>
            <div className="movie-info">
                <h3 className="movie-title">{movie.title}</h3>
                <div className="movie-details">
                    <span className="rating">⭐ {movie.rating}</span>
                    <span className="year"> {movie.year}</span>
                </div>
                <p className="movie-genre"> {movie.genre.join(", ")}</p>
            </div>
        </div>
    );
}