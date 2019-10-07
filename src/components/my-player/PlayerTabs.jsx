import React, { Component } from 'react'
import CourseContentTab from './CourseContentTab'
import OverviewTab from './OverviewTab'
import QuestionAnswer from './QuestionAnswer'

export default class PlayerTabs extends Component {
    render() {
        return (
            <div className="player-tabs container mt-5">
                <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="course-content-tab" data-toggle="tab" href="#course-content" role="tab" aria-controls="course-content" aria-selected="true">Nội dung khóa học</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="overview-tab" data-toggle="tab" href="#overview" role="tab" aria-controls="overview" aria-selected="false">Tổng quan</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="qa-tab" data-toggle="tab" href="#qa" role="tab" aria-controls="qa" aria-selected="false">Hỏi đáp</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="announcements-tab" data-toggle="tab" href="#announcements" role="tab" aria-controls="announcements" aria-selected="false">Thông báo</a>
                    </li>
                </ul>
                <div className="tab-content">
                    <CourseContentTab getVideoUrl={this.props.getVideoUrl} maKH={this.props.maKH}></CourseContentTab>
                    <OverviewTab></OverviewTab>
                    <QuestionAnswer maKH={this.props.maKH}></QuestionAnswer>
                    <div className="tab-pane fade" id="announcements" role="tabpanel" aria-labelledby="announcements-tab">4</div>
                </div>
            </div>
        )
    }
}
