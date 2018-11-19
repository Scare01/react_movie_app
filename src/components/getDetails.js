import React from 'react';
import { Fetch } from 'react-data-fetching';
import { Image, Grid, Header, Container } from 'semantic-ui-react';


export default class Details extends React.Component {
  render() {

    const details_url = 'https://api.themoviedb.org/3/movie/';
    const api_key = '?api_key=8f2490decc0a336ae87db98a12a29a59';
    const img_url = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/'; 

    return (
      
      <Fetch
        url={details_url+this.props.movieId+api_key}
      >

      {({data}) => (

        <Grid>
          <Grid.Column width={6}>
            <Image src={img_url+data.poster_path}/>  
          </Grid.Column>
          <Grid.Column width={9} textAlign="center">
            <Header as='h2'>{data.title}</Header>
            <Container>
              <p>{data.overview}</p>
            </Container>
          </Grid.Column>

        </Grid>
        

      )}

      </Fetch>
    )
  }
}