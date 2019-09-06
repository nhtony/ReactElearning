import React from 'react'

export default function ReviewBar(props) {

    const { value } = props.reviewValue;
    const name = props.name;
    const quantity = props.quantity;
    let proportion = 0;
    if (quantity !== 0) {
        proportion = ((value / quantity) * 100).toFixed(2);
    }
    const style = {
        width: proportion + "%"
    }
    return (
        <li className="key_4">
            <span className="rating-breakdown__key">{name} Star</span>
            <div className="progress">
                <div role="progressbar" className="progress-bar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={style}>
                </div>
            </div>
            <span className="rating-breakdown__count">{proportion}%</span>
        </li>
    )
}
