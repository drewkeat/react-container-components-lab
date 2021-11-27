// Code MovieReviews Here
// lists a series of movie reviews.  Stateless and functional.

import React from 'react'

function MovieReviews({reviews}) {
  const Review = (review) => {
    return (
      <div key={`${review.display_title}-${review.byline}`} className="card">
        <div className="card-header"><a href={review.link.url}><b>{review.headline}</b></a></div>
        <div className="card-body">
          <p>{review.summary_short}</p>
        </div>
      </div>
      )
  }

  return (
    <div className="review-list">
      {reviews.map(review => Review(review))}
    </div>
  )
}

export default MovieReviews
