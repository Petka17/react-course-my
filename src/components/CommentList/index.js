import React, { PropTypes } from 'react';

import applyToggleOpen from '../../HOC/ToggleOpen';

const CommentList = ({
    comments,
    isOpen,
    toggleOpen
}) => (
    <div>
        <a href="#"
           onClick={toggleOpen}
        >
            {isOpen ? 'Close Comments' : 'Open Comments'}
        </a>
        <ul hidden={!isOpen} >
            {comments.map(({ id, text, name }) =>
                <li key={id}>
                    <p>{text}</p>
                    <p>{name}</p>
                </li>
            )}
        </ul>
    </div>
);

CommentList.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            id:   PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    ),
    isOpen:     PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func.isRequired
};

export default applyToggleOpen(CommentList);
