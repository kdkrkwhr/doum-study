import React, { Component } from 'react';

class DefaultNavbar extends Component {
    static defaultProps = {
        name : "navbar"
    }
    render() {
        return (
            <div>
                {this.props.name} 입니다...
            </div>
        );
    }
}

export default DefaultNavbar;