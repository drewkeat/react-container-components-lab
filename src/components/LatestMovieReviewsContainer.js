import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'lrS1ZNGy023bzCkGAiAdGGm2lhTDVa30';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
// Fetch a list of recent reviews and display them
class LatestMovieReviewsContainer extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      reviews: []
    }
  }
  
  componentDidMount() {
    fetch(URL)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        reviews: data.results
      })
    })
  }

  render() {
    return (
      <div className="col-sm latest-movie-reviews">
        <h2>Recent Reviews</h2>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default LatestMovieReviewsContainer