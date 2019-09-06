import React from 'react'


export default function ReviewCircle(props) {

    const reviewValue = props.reviewValue;
    const quantity = props.quantity;

    let number = 0;
    let arrangeVal = 0;
    let total = 0;
    let result = 0;

    for (const key in reviewValue) {
        if (quantity !== 0) {
            result = (key * ((reviewValue[key].value)/quantity));
            if (reviewValue[key].value > 0) {
                number += 1;
            }
            total += result;
        }
    }
    arrangeVal = (total / number).toFixed(1)

    return (
        <div className="ratingCircle col-sm-4">
            <span className="rating-circle">{arrangeVal}</span>
        </div>
    )
}
