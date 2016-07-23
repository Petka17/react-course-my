import React, { Component } from 'react';

export default (ReactComponent) =>
    class SingleOpen extends Component {
        constructor(props) {
            super(props);

            this.state = {
                selectedItemId: null
            };

            this.selectItem = this.selectItem.bind(this);
        }

        selectItem(id) {
            this.setState({
                selectedItemId: this.state.selectedItemId === id ? null : id
            });
        }

        render() {
            return (
                <ReactComponent {...this.props}
                                selectedItemId={this.state.selectedItemId}
                                selectItem={this.selectItem}
                />
            );
        }
    };
