import React, { PropTypes } from 'react';

import CommentList from '../CommentList';

const Article = ({
    title,
    text,
    deleteArticle,
    addComment,
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
           onClick={(ev) => {
               ev.preventDefault();
               selectArticle();
           }}
        >
            Select
        </a>
        &nbsp;|&nbsp;
        <a href="#"
           onClick={(ev) => {
               ev.preventDefault();
               deleteArticle();
           }}
        >
            Delete
        </a>

        <div hidden={!isOpen} >
            <section>{text}</section>
            <CommentList comments={comments}
                         addComment={addComment}
            />
        </div>
    </div>
);

Article.propTypes = {
    title:         PropTypes.string.isRequired,
    text:          PropTypes.string,
    deleteArticle: PropTypes.func.isRequired,
    addComment:    PropTypes.func.isRequired,
    selectArticle: PropTypes.func.isRequired,
    isSelected:    PropTypes.bool.isRequired,
    comments:      PropTypes.array.isRequired,
    isOpen:        PropTypes.bool.isRequired,
    toggleOpen:    PropTypes.func.isRequired
};

export default Article;
