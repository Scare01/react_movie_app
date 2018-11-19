import React from 'react';
import { Button, Header } from 'semantic-ui-react';

import './movie.css';

import Details from './getDetails';
import Recommendations from './getRecommendations';

export default class MovieDetail extends React.Component {

  viewDetails = (movie) => {
    this.props.viewDetails(movie);
  }

  render() {
    return (
      <div id="content">
        <Details 
          movieId={this.props.movieId}
        />
        <Button onClick={this.props.goHome}>Back</Button>

        <Header as="h2">Recommendations:</Header>
        
        <Recommendations 
          movieId={this.props.movieId}
          genres={this.props.genres}
          viewDetails={this.viewDetails}
        />
        
      </div>
    )
  }
}