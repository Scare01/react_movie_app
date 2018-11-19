import React from 'react';


export default class MovieDetail extends React.Component {


  render() {
    return (
      <>
      <h1>{this.props.movie.id}</h1>
      <button onClick={this.props.goHome}>Back</button>
      </>
    )
  }
}