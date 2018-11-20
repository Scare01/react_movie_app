import React from 'react';
import { Fetch } from 'react-data-fetching';
import { Grid } from 'semantic-ui-react';

import Movie from './movie';

export default class Recommendations extends React.Component {

  viewDetails = (movie) => {
    this.props.viewDetails(movie);
  }


  render(){
    const recom_part1_url = "https://api.themoviedb.org/3/movie/";
    const recom_part2_url = "/recommendations";
    const api_key = '?api_key=8f2490decc0a336ae87db98a12a29a59';

    return (
      <Fetch 
        url={recom_part1_url+this.props.movieId+recom_part2_url+api_key}
      >

      {({data}) => ( 
        <Grid centered columns={6}>
          {data.results.map(movie =>
            <Grid.Column key={movie.id}>
              <Movie 
                movie={movie}
                viewDetails={this.viewDetails}
              />
            </Grid.Column>
          )}
        </Grid>
      )}
      
    


      </Fetch>
    )
  }
}