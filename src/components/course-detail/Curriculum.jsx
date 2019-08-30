import React, { Component } from 'react'
import CSSTransitionGroup from 'react-addons-css-transition-group';
export default class Curriculum extends Component {


    constructor(props) {
        super(props);
        this.state = {
            showAccor1: true,
            showAccor2: false,
            showAccor3: false
        }
    }

    openAccor = (id) => {
        switch (id) {
            case "accor1":
                this.setState({
                    showAccor1: !this.state.showAccor1
                })
                break;
            case "accor2":
                this.setState({
                    showAccor2: !this.state.showAccor2
                })
                break;
            case "accor3":
                this.setState({
                    showAccor3: !this.state.showAccor3
                })
                break;
            default:
                break;
        }
    }


    renderAccor = (id) => {
        switch (id) {
            case "panel1":
                return (this.state.showAccor1) ? <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque rerum iusto enim laboriosam explicabo eaque beatae quidem voluptate hic dolorem, accusamus quibusdam porro delectus et quas non minima quia temporibus.</p> : null;
            case "panel2":
                return (this.state.showAccor2) ? <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque rerum iusto enim laboriosam explicabo eaque beatae quidem voluptate hic dolorem, accusamus quibusdam porro delectus et quas non minima quia temporibus.</p> : null;
            case "panel3":
                return (this.state.showAccor3) ? <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque rerum iusto enim laboriosam explicabo eaque beatae quidem voluptate hic dolorem, accusamus quibusdam porro delectus et quas non minima quia temporibus.</p> : null;
            default:
                return null;
        }
    }


    render() {
        return (
            <div className="tab-pane mt-4  fade" id="curriculum" role="tabpanel" aria-labelledby="curriculum-tab">
                <h4 className="mb-4">CURRICULUM</h4>
                <div className="curriculum-accor">
                    <button id="accor1" className="accordion" onClick={() => this.openAccor("accor1")}>Introduction</button>
                    <div id="panel1" className="panel">
                        <CSSTransitionGroup transitionName="example"
                            transitionEnterTimeout={300}
                            transitionLeaveTimeout={200}>
                            {this.renderAccor("panel1")}
                        </CSSTransitionGroup>
                    </div>
                    <button id="accor2" className="accordion" onClick={() => this.openAccor("accor2")}>Lesson 1</button>
                    <div id="panel2" className="panel">
                        <CSSTransitionGroup transitionName="example"
                            transitionEnterTimeout={300}
                            transitionLeaveTimeout={200}>
                            {this.renderAccor("panel2")}
                        </CSSTransitionGroup>
                    </div>
                    <button id="accor3" className="accordion" onClick={() => this.openAccor("accor3")}>Lesson 2</button>
                    <div id="panel3" className="panel">
                        <CSSTransitionGroup transitionName="example"
                            transitionEnterTimeout={300}
                            transitionLeaveTimeout={200}>
                            {this.renderAccor("panel3")}
                        </CSSTransitionGroup>
                    </div>
                </div>
            </div>
        )
    }
}
