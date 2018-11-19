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
    movie_detail_id: null,
    movie: null,
  }

  goHome = () => {
    this.setState({
      movie_detail_id: null,
    })
  }

  viewDetails = (movieDetail) => {
   this.setState({
     movie_detail_id: movieDetail.id,
     movie: movieDetail,
   });
   console.log(movieDetail.id);
  }

  render() {
    if (this.state.movie_detail_id) {
      return (
        <MovieDetail 
          movie={this.state.movie}
          goHome={this.goHome}
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



