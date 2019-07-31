import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        return (
            <section className="banner">
                <div className="container">
                    <h3>What would you learn?</h3>
                    <p>Increase your expertise in business, technology and personal development</p>
                    {/* <form>
                        <div id="custom-search-input">
                            <div className="input-group">
                                <input type="text" className="search" placeholder="Ex. Architecture, Specialization..." />
                                <input type="submit" className="btn_search" defaultValue="Search" />
                            </div>
                        </div>
                    </form> */}
                </div>
            </section>
        )
    }
}
