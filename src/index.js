import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import genresFromFile from './components/genres.json';

import PopularMovies from './components/popularMovies';

const genres = genresFromFile;

class App extends React.Component {

  state = {
    genres: [...genres],
  }

  viewDetails = (movie) => {
    console.log(movie.id);
  }

  render() {
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
