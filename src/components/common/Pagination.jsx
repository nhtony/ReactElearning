import React, { Component } from 'react'
import * as _ from "lodash";
export default class Pagination extends Component {
    render() {
        console.log(this.props.totalPages);
        return (
            <ul className="pagination d-flex justify-content-center mt-3">
                {_.range(this.props.totalPages).map((item, index) => (
                    <li key={index}  onClick={() => this.props._changePage(index + 1)}><button>{item}</button></li>
                ))}
            </ul>
        )
    }
}
