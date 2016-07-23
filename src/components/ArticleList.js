import React, { PropTypes } from 'react';

import Article from './Article';
import applySingleOpen from '../HOC/SingleOpen';

const ArticleList = ({
    articles,
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
    selectedItemId: PropTypes.string,
    selectItem:     PropTypes.func.isRequired
};

export default applySingleOpen(ArticleList);
