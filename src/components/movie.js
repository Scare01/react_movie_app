import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import './movie.css';



export default class Movie extends React.Component {
  render() {
    const img_url = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/'; 
    const genres = this.props.genres;

    return (
      <Card>
        <Image src={img_url+this.props.movie.poster_path} /> 
        <Card.Content textAlign="center">
          <Card.Header id="movie_title">
            {this.props.movie.title}
          </Card.Header>
          <Card.Meta>
            
            {this.props.movie.genre_ids.map(genre =>
              genres.map(gen => 
                (gen.id === genre) ? 
                

                  <div key={gen.id}>{gen.name}</div> 
                  : null
                
              )
            )}
            
          </Card.Meta>
         
        </Card.Content>
        <Button attached='bottom'>View Deatils</Button>
      </Card>
    )
  }
}





