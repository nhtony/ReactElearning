import React from 'react'
import { Link } from 'react-router-dom';
export default function PageNotFound() {
    return (
        <div>
            {/* <img src={PageNotFound} style={{ width: 400, height: 400, display: 'block', margin: 'auto', position: 'relative' }} /> */}
            <h4 className="text-danger text-center">404 NOT FOUND</h4>
            <center><Link to="/home">Return to Home Page</Link></center>
        </div>
    )
}
