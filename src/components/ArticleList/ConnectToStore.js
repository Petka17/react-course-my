import React, { Component } from 'react';

import { articleStore } from '../../stores';
import { deleteArticle } from '../../actions';

export default (ReactComponent) =>
    class ArticleListContainer extends Component {
        constructor(props) {
            super(props);

            this.updateState = this.updateState.bind(this);

            this.state = {
                articles: articleStore.getAll()
            };
        }

        componentDidMount() {
            articleStore.addChangeListner(this.updateState);
        }

        componentWillUnmount() {
            articleStore.removeChangeListner(this.updateState);
        }

        render() {
            return (
                <ReactComponent {...this.props}
                                articles={this.state.articles}
                                deleteArticleFactory={(id) => (ev) => {
                                    ev.preventDefault();
                                    deleteArticle(id);
                                }}
                />
            );
        }

        updateState() {
            this.setState({
                articles: articleStore.getAll()
            });
        }
    };
