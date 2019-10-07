import React, { Component } from 'react'
import { courseContent } from '../../common/CourseService';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';
export default class CourseContentTab extends Component {
    IdElement = {};

    renderAccordionItemPanel = (content) => {
        return content.map((item, index) => {
            return (<div className="lesson-panel" key={index} >
                <p onClick={()=>{this.props.getVideoUrl(item.url)}}>
                    <i className="fa fa-file-o mr-3"></i>{item.name}
                </p>
                <p>
                    {item.times}
                </p>
            </div>)
        })
    }

    openCollapse = (id) => {
        this.IdElement[id] = !this.IdElement[id];
        document.getElementById(id).innerHTML = (this.IdElement[id]) ? "+" : "-";
    }


    componentDidMount() {
        let listele = document.getElementsByClassName('col-expand');
        listele = Array.from(listele);
        listele.forEach(element => {
            this.IdElement[element.getAttribute("id")] = true;
        });

    }

    renderAccordionItem = (content) => {
        return content.map((item, index) => {
            return (
                <AccordionItem key={index} onClick={() => this.openCollapse(item.id)}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className="row">
                                <div id={item.id} className="col-2 col-expand">
                                    +
                                </div>
                                <div className="col-6">
                                    {item.title}
                                </div>
                                <div className="col-2 col-lectures">
                                    {item.content.length} bài học
                                </div>
                                <div className="col-2 col-times">
                                    {item.allTime}
                                </div>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        {this.renderAccordionItemPanel(item.content)}
                    </AccordionItemPanel>
                </AccordionItem>
            );
        })
    }

    render() {
        const { lesson } = (courseContent.hasOwnProperty(this.props.maKH)) ? courseContent[this.props.maKH] : { lesson: [] };
        return (
            <div className="tab-pane fade show active" id="course-content" role="tabpanel" aria-labelledby="course-content-tab">
                <div className="curriculum-accor">
                    <Accordion allowZeroExpanded={true} allowMultipleExpanded={true}>
                        {this.renderAccordionItem(lesson)}
                    </Accordion>
                </div>
            </div>
        )
    }
}
