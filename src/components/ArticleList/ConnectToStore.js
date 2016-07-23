import React, { Component } from 'react';

import { articleStore } from '../../stores';
import { deleteArticle } from '../../actions';

export default (ReactComponent) =>
    class ArticleListContainer extends Component {
        constructor(props) {
            super(props);

            this.bindThisToMethods();

            this.state = {
                articles:     articleStore.getAll(),
                selectedList: {}
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

                                    if (this.state.selectedList[id])
                                        this.selectArticle(id);
                                }}
                                selectArticleFactory={(id) => (ev) => {
                                    ev.preventDefault();
                                    this.selectArticle(id);
                                }}
                                selectedList={this.state.selectedList}
                />
            );
        }

        updateState() {
            this.setState({
                articles: articleStore.getAll()
            });
        }

        selectArticle(id) {
            const { selectedList } = this.state;

            if (selectedList[id])
                delete selectedList[id];
            else
                selectedList[id] = true;

            this.setState({
                selectedList
            });
        }

        bindThisToMethods() {
            this.updateState = this.updateState.bind(this);
            this.selectArticle = this.selectArticle.bind(this);
        }
    };
