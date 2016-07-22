import React, { Component } from 'react';

export default (ReactComponent) =>
    class ToggleOpen extends Component {
        constructor(props) {
            super(props);

            this.state = {
                isOpen: false
            };

            this.toggleOpen = this.toggleOpen.bind(this);
        }

        toggleOpen() {
            this.setState({
                isOpen: !this.state.isOpen
            });
        }

        render() {
            return (
                <ReactComponent {...this.props}
                                isOpen={this.state.isOpen}
                                toggleOpen={this.toggleOpen}
                />
            );
        }
    };
