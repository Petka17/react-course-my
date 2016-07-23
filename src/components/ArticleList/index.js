import React, { PropTypes } from 'react';

import Article             from '../Article';
import applyConnectToStore from './ConnectToStore';
import applySingleOpen     from '../../HOC/SingleOpen';

const ArticleList = ({
    articles,
    deleteArticleFactory,
    selectArticleFactory,
    selectedList,
    selectedItemId,
    selectItem
}) => (
    <div>
        <ul>
            {articles.map(article =>
                <li key={article.id}>
                    <Article {...article}
                             isOpen={article.id === selectedItemId}
                             toggleOpen={() => selectItem(article.id)}
                             deleteArticle={deleteArticleFactory(article.id)}
                             selectArticle={selectArticleFactory(article.id)}
                             isSelected={selectedList[article.id] === true}
                    />
                </li>
            )}
        </ul>
    </div>
);

ArticleList.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            id:    PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text:  PropTypes.string.isRequired
        })
    ),
    deleteArticleFactory: PropTypes.func.isRequired,
    selectArticleFactory: PropTypes.func.isRequired,
    selectedList:         PropTypes.object.isRequired,
    selectedItemId:       PropTypes.string,
    selectItem:           PropTypes.func.isRequired
};

export default applyConnectToStore(applySingleOpen(ArticleList));
