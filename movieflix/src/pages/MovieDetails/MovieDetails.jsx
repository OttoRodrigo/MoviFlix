import { useNavigate, useParams } from "react-router-dom";
import moviesData from '../../mocks/movies.json'
import './MovieDetails.css'

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = moviesData.movies.find(p => p.id == id);
  

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="movie-details-page">
      <div 
        className="movie-backdrop"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(${movie.image})`
        }}
      >
        <button onClick={handleBack} className="back-button">
          ← Voltar
        </button>
      </div>

      <div className="movie-details-container">
        <div className="movie-poster">
          <img src={movie.image} alt={movie.title} />
        </div>

        <div className="movie-content">
          <div className="movie-header">
            <h1 className="movie-title">{movie.title} <span className="movie-year">({movie.year})</span></h1>
            
            <div className="movie-meta">
              <span className="rating">⭐ {movie.rating}/10</span>
              <span className="duration">⏱️ {movie.duration}</span>
              {movie.featured && <span className="featured">🌟 Destaque</span>}
              {movie.top10 && <span className="top-10">🏆 Top 10</span>}
            </div>

            <div className="genre-tags">
              {movie.genre.map((genre, index) => (
                <span key={index} className="genre-tag">{genre}</span>
              ))}
            </div>
          </div>

          <div className="movie-body">
            <h2>Sinopse</h2>
            <p className="movie-description">{movie.description}</p>

            <div className="movie-actions">
              <button className="play-now">
                <span className="play-icon">▶</span> Assistir Agora
              </button>
              <button className="add-to-list">+ Minha Lista</button>
              <button className="share">Compartilhar</button>
            </div>
          </div>

          <div className="movie-info-grid">
            <div className="info-item">
              <h3>Ano de Lançamento</h3>
              <p>{movie.year}</p>
            </div>
            <div className="info-item">
              <h3>Duração</h3>
              <p>{movie.duration}</p>
            </div>
            <div className="info-item">
              <h3>Classificação</h3>
              <p>{movie.rating}/10</p>
            </div>
            <div className="info-item">
              <h3>Gêneros</h3>
              <p>{movie.genre.join(', ')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;