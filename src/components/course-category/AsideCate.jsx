import React, { PureComponent } from 'react'
import ListCateItem from './ListCateItem'


export default class AsideCate extends PureComponent {

    render() {  
        return (
            <aside className="category-aside sticky">
                <div className="all-cate-course">
                    <div className="widget-title">
                        <h5>ALL COURSES</h5>
                    </div>
                    <div className="list-type row">
                        <ListCateItem></ListCateItem>
                    </div>
                </div>
            </aside>
        )
    }
}

