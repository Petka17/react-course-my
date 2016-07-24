import React, { PropTypes } from 'react';

import CommentList from '../CommentList';

const Article = ({
    title,
    text,
    deleteArticle,
    selectArticle,
    isSelected,
    comments,
    isOpen,
    toggleOpen
}) => (
    <div>
        <h3 onClick={toggleOpen}
            style={isSelected ? { color: 'red' } : { color: 'black' }}
        >
            {title}
        </h3>

        <a href="#"
           onClick={selectArticle}
        >
            Select
        </a>
        &nbsp;|&nbsp;
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
    selectArticle: PropTypes.func.isRequired,
    isSelected:    PropTypes.bool.isRequired,
    comments:      PropTypes.array.isRequired,
    isOpen:        PropTypes.bool.isRequired,
    toggleOpen:    PropTypes.func.isRequired
};

export default Article;
