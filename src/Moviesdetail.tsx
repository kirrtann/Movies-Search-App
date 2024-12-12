import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

interface MovieDetail {
  Title: string;
  Year: string;
  Director: string;
  Genre: string;
  Plot: string;
  Poster: string;
  imdbID: string;
}

const API = "https://www.omdbapi.com/?apikey=19f4e811&";

const Moviesdetail = () => {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const navigate = useNavigate(); 

 
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const res = await axios.get(`${API}i=${imdbID}`);
        setMovie(res.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    if (imdbID) {
      fetchMovieDetails();
    }
  }, [imdbID]);
  const BackButton = () => {
    navigate(-1); 
  };

  return (
    <>
      <div className="bg-gray-800">
        <button
          className="text-white ml-5 px-3 mt-2 rounded-md border"
          onClick={BackButton} 
        >
          Back
        </button>
      </div>
      <div className="bg-gray-800 min-h-screen text-white py-10 font-serif">
        {movie ? (
          <div className="max-w-4xl mx-auto px-4">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="object-cover rounded-lg mb-6 shadow-lg transform transition-transform"
            />
            <h1 className="text-4xl font-serif font-semibold mb-4 text-gray-100">{movie.Title}</h1>
            <p className="text-lg text-gray-300 mb-4">{movie.Plot}</p>
            <div className="mt-4 space-y-2">
              <p className="text-xl">Year: <span className="font-semibold">{movie.Year}</span></p>
              <p className="text-xl">Director: <span className="font-semibold">{movie.Director}</span></p>
              <p className="text-xl">Genre: <span className="font-semibold">{movie.Genre}</span></p>
            </div>
          </div>
        ) : (
          <h1 className="text-center text-3xl text-gray-400">Loading movie details...</h1>
        )}
      </div>
    </>
  );
};

export default Moviesdetail;

