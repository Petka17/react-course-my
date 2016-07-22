import React, { PropTypes } from 'react';

import CommentList from './CommentList';

import applyToggleOpen from '../HOC/ToggleOpen';

const Article = ({
    title,
    text,
    comments,
    isOpen,
    toggleOpen
}) => (
    <div>
        <h3 onClick={toggleOpen}>{title}</h3>
        <div hidden={!isOpen} >
            <section>{text}</section>
            <CommentList comments={comments} />
        </div>
    </div>
);

Article.propTypes = {
    title:      PropTypes.string.isRequired,
    text:       PropTypes.string.isRequired,
    comments:   PropTypes.array.isRequired,
    isOpen:     PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func.isRequired
};

export default applyToggleOpen(Article);
