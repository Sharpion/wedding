import React, { Component } from 'react';

class MenuButton extends Component {
    render () {
        return (
            <li onClick={this.props.onClick}>
                <a href={this.props.link} alt={this.props.description}>{this.props.description}</a>
            </li>    
        )
    }
}

export default MenuButton;