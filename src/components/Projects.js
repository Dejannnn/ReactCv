import React, { Component } from 'react';

class Projects extends Component {

    render() {
        return (
            <div className="item">
                <span className="project-title"><a href="#hook">{this.props.item.projectTitle}</a></span> - <span className="project-tagline">{this.props.item.projectTagline}</span>
            </div>
        )
    }
}

export default Projects;