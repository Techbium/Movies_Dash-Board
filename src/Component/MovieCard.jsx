import React from "react";


  
const MovieCard = ({ movie }) => {
  return(

    <div className='movie'>
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://assets-v2.lottiefiles.com/a/6a21fb9a-1178-11ee-a809-cbf4c1cb708c/KS4fSTQC7T.gif'
        } alt="Movie image"/>
      </div>
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>

  )

}

export default MovieCard;