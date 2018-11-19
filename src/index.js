import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import genresFromFile from './components/genres.json';


import PopularMovies from './components/popularMovies';
import MovieDetail from './components/movieDetail'

const genres = genresFromFile;

class App extends React.Component {

  state = {
    genres: [...genres],
    movieId: null,
    
  }

  goHome = () => {
    this.setState({
      movieId: null,
    })
  }

  viewDetails = (movie) => {
   this.setState({
     movieId: movie.id,
   });
   
  }

  render() {
    if (this.state.movieId) {
      return (
        <MovieDetail 
          movieId={this.state.movieId}
          goHome={this.goHome}
          viewDetails={this.viewDetails}
          genres={this.state.genres}
        />
      )
    }
    return (
      <div id='content'>

     
      
      <PopularMovies 
        genres={this.state.genres}
        viewDetails={this.viewDetails}
      />
      
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));



