import React, { PropTypes } from 'react';

import Article from './Article';

const ArticleList = ({
    articles
}) => (
    <div>
        <ul>
            {articles.map(article =>
                <li key={article.id}>
                    <Article {...article} />
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
            text:  PropTypes.string.isRequired
        })
    )
};

export default ArticleList;
