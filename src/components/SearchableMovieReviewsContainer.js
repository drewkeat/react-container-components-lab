import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'lrS1ZNGy023bzCkGAiAdGGm2lhTDVa30';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
// provide a searchable interface allowing the user to enter a search term and then receive a list of reviews that match the search term(s)
class SearchableMovieReviewsContainer extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  handleChange = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  handleSearch = (event) => {
    event.preventDefault()
    fetch(URL + this.state.searchTerm)
    .then(resp => resp.json())
    .then(data => this.setState({reviews: data.results}))
    event.target.reset()
  }
  
  render() {
    return (
      <div className="col-sm">
        <h2>Search for Reviews</h2>
        <form onSubmit={this.handleSearch}>
          <input type="text" onChange={this.handleChange}/>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
