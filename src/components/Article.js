import React, { PropTypes } from 'react';

import CommentList from './CommentList';

const Article = ({
    title,
    text,
    deleteArticle,
    comments,
    isOpen,
    toggleOpen
}) => (
    <div>
        <h3 onClick={toggleOpen}>{title}</h3>

        <a href="#"
           onClick={deleteArticle}
        >
            Delete
        </a>

        <div hidden={!isOpen} >
            <section>{text}</section>
            <CommentList comments={comments} />
        </div>
    </div>
);

Article.propTypes = {
    title:         PropTypes.string.isRequired,
    text:          PropTypes.string.isRequired,
    deleteArticle: PropTypes.func.isRequired,
    comments:      PropTypes.array.isRequired,
    isOpen:        PropTypes.bool.isRequired,
    toggleOpen:    PropTypes.func.isRequired
};

export default Article;
