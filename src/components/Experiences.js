import React, { Component } from 'react';

class Experiences extends Component {

    render() {
        return (
            <div className="item">
                <div className="meta">
                    <div className="upper-row">
                        <h3 className="job-title">{this.props.item.jobTitle}</h3>
                        <div className="time">{this.props.item.time}</div>
                    </div>
                    <div className="company">{this.props.item.company}</div>
                </div>
                <div className="details">
                    <p>{this.props.item.details}</p>
                </div>
            </div>
        )
    }
}

export default Experiences;