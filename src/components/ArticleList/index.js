import React, { PropTypes } from 'react';

import Article          from './Article';
import applyArticleList from './ArticleListContainer';
import applySingleOpen  from '../../HOC/SingleOpen';

const ArticleList = ({
    articles,
    loading,
    deleteArticleFactory,
    selectArticleFactory,
    addCommentFactory,
    selectedList,
    selectedItemId,
    selectItem
}) => (
    <div>
        <div hidden={!loading}>
            <h2>Loading...</h2>
        </div>
        <ul>
            {articles.map(article =>
                <li key={article.id}>
                    <Article {...article}
                             comments={article.getRelation('comments')}
                             isOpen={article.id === selectedItemId}
                             toggleOpen={() => selectItem(article.id)}
                             deleteArticle={deleteArticleFactory(article.id)}
                             selectArticle={selectArticleFactory(article.id)}
                             addComment={addCommentFactory(article.id)}
                             isSelected={!!selectedList[article.id]}
                    />
                </li>
            )}
        </ul>
    </div>
);

ArticleList.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            id:    PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            text:  PropTypes.string
        })
    ),
    loading:              PropTypes.bool,
    deleteArticleFactory: PropTypes.func.isRequired,
    selectArticleFactory: PropTypes.func.isRequired,
    addCommentFactory:    PropTypes.func.isRequired,
    selectedList:         PropTypes.object.isRequired,
    selectedItemId:       PropTypes.number,
    selectItem:           PropTypes.func.isRequired
};

export default applyArticleList(applySingleOpen(ArticleList));
