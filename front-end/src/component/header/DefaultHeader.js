import React, { Component } from 'react';

class DefaultHeader extends Component {
    static defaultProps = {
        name : "header"
    }
    render() {
        return (
            <header className="defaultHeader">
                <p>
                    {this.props.name}입니다...
                </p>
            </header>
        );
    }
}

export default DefaultHeader;