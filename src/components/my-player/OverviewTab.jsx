import React, { Component } from 'react'

export default class OverviewTab extends Component {
    render() {
        return (
            <div className="tab-pane fade" id="overview" role="tabpanel" aria-labelledby="overview-tab">
                <div className="about-this">
                    <h5>Về khóa học</h5>
                    <p>Learn to use the popular and hot JavaScript Framework VueJs / Vue or Vue.js</p>
                </div>
                <div className="by-number">
                    <div className="row">
                        <div className="col-5">
                            By the numbers
                    </div>
                        <div className="col-7">
                            Time
                    </div>
                    </div>

                </div>
                <div className="desc">
                    <div className="row">
                        <div className="col-5">
                            Mô tả
                        </div>
                        <div className="col-7">
                            This Javascript Framework called Vue.js,  or Vue has become very popular, especially in the Laravel community. Vue has adopted and improved many features of the other bigger frameworks like Angular, React and Ember
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
