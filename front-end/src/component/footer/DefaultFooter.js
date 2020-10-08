import React, { Component } from 'react';

class DefaultFooter extends Component {
    static defaultProps = {
        name : "footer"
    }
    render() {
        return (
            <div>
                {this.props.name} 입니다...
            </div>
        );
    }
}

export default DefaultFooter;