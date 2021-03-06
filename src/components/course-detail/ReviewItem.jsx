import React, { Component } from 'react'



export default class ReviewItem extends Component {

    getListStar(number) {
        let listStar = [];
        for (let index = 0; index < number; index++) {
            listStar.push(index)
        }
        return listStar;
    }

    renderStar = (list) => {
        return list.map((index) => {
            return (<li key={index}><i className="fa fa-star"></i></li>);
        })
    }

    render() {
        const { comment, rating, time, avt, name } = this.props.content;


        const list = this.getListStar(rating);

        return (
            <li className="review-item">
                <div className="row">
                    <div className="col-4 review-info">
                        <img className="review-img" src={avt} alt="" />
                        <div className="info">
                            <h6>{name}</h6>
                            <p>{time}</p>
                        </div>
                    </div>
                    <div className="col-8 review-content">
                        <ul className="review-rating">
                            {this.renderStar(list)}
                        </ul>
                        <p>{comment}</p>
                    </div>
                </div>
            </li>
        )
    }
}
