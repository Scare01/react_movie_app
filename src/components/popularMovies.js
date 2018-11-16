import React from 'react';
import { Fetch } from 'react-data-fetching';
import { Grid } from 'semantic-ui-react';
import Movie from './movie';

export default class PopularMovies extends React.Component {
  
  
  render() {
    const main_url = 'https://api.themoviedb.org/3/movie/popular';
    const api_key = '?api_key=8f2490decc0a336ae87db98a12a29a59';
    
    
    return (
      <>

      <Fetch
        url={main_url+api_key}
      >
      {({ data }) => (
        <Grid columns={4}>
          
            
              
              {data.results.map(movie => 
                <Grid.Column key={movie.id}>
                  <Movie 
                    movie={movie}
                    genres={this.props.genres}
                  />
                </Grid.Column>
              )}
            
          
        </Grid>

      )}
      </Fetch>

      

      </>
    )
  }
  
}