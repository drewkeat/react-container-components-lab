import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import LatestMovieReviewsContainer from './components/LatestMovieReviewsContainer';
import SearchableMovieReviewsContainer from './components/SearchableMovieReviewsContainer';

ReactDOM.render(
  <div className="app">
    <div className="container-fluid row">
      <LatestMovieReviewsContainer />
      <SearchableMovieReviewsContainer />
    </div>
  </div>,
  document.getElementById('root')
);