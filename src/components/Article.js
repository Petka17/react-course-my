import React, { PropTypes } from 'react';

const Article = ({
    title,
    text
}) => (
    <div>
        <h3>{title}</h3>
        <section>{text}</section>
    </div>
);

Article.propTypes = {
    title: PropTypes.string.isRequired,
    text:  PropTypes.string.isRequired
};

export default Article;
