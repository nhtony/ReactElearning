import React, { Component } from 'react'
import StarRatingComponent from 'react-star-rating-component';
export default class Repond extends Component {
    constructor() {
        super();

        this.state = {
            rating: 1
        };
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({ rating: nextValue });
    }
    render() {
        const { rating } = this.state;
        return (
            <div id="respond" className="comment-respond">
                <h3 id="reply-title" className="comment-reply-title">Leave a comment </h3>
                <div className="rating-star">
                    <StarRatingComponent
                        name="rate1"
                        starCount={5}
                        value={rating}
                        onStarClick={this.onStarClick.bind(this)}
                    />
                    <span>Your email address will not be published. Required fields are marked *</span>
                </div>
                <form className="form-comment">
                   
                        <input type="text" placeholder="Your name" />
                        <input type="email" placeholder="Your email" />
                        <input type="text" placeholder="Your website" />
                 
                    <div className="d-flex align-items-center mt-4 mb-4">
                        <input type="checkbox" />
                     <label className="subscribe-label mb-0" id="subscribe-blog-label" htmlFor="subscribe_blog">Notify me of new posts by email.</label>

                    </div>
                    <textarea className="p-3" id="comment" name="comment" cols="84" rows="8" aria__required="true" placeholder="Your Comment"></textarea>
                    <div className="submit-btn">
                    <button type="submit">SUBMIT</button>
                    </div>
              
                </form>
            </div>

        )
    }
}
