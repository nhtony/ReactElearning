import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        return (
            <div id="myModal" className="modal fade" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Modal Header</h4>
                            <button type="button" className="close" data-dismiss="modal">×</button>

                        </div>
                        <div className="modal-body">
                            <p>Some text in the modal.</p>
                        </div>
                        <div className="modal-footer">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
