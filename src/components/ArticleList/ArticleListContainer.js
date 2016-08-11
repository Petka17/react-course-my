import React, { Component } from 'react';

import async from 'async';

import { articleStore } from '../../stores';
import {
    loadAllArticles,
    loadArticleById,
    deleteArticle,
    loadAllComments,
    addCommentToArticle
} from '../../actions';

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

            async.series([
                loadAllComments(),
                loadAllArticles()
            ]);
        }

        componentWillUnmount() {
            articleStore.removeChangeListner(this.updateState);
        }

        render() {
            return (
                <ReactComponent {...this.props}
                                articles={this.state.articles}
                                deleteArticleFactory={(id) => () => {
                                    deleteArticle(id);

                                    if (this.state.selectedList[id])
                                        this.selectArticle(id);
                                }}
                                selectArticleFactory={(id) => () =>
                                    this.selectArticle(id)
                                }
                                addCommentFactory={(id) => (text) =>
                                    addCommentToArticle(id, text)
                                }
                                selectedList={this.state.selectedList}
                                processOpen={(id) => {
                                    if (!articleStore.getById(id).text) {
                                        async.series([
                                            loadArticleById({ id })
                                        ]);
                                    }
                                }}
                                loading={articleStore.loading}
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
