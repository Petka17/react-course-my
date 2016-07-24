import React, { PropTypes } from 'react';

import applyToggleOpen from '../../HOC/ToggleOpen';

const CommentList = ({
    comments,
    addComment,
    isOpen,
    toggleOpen
}) => {
    let input;

    return (
        <div>
            <a href="#"
               onClick={toggleOpen}
            >
                {isOpen ? 'Close Comments' : 'Open Comments'}
            </a>
            <div hidden={!isOpen}>
                <div>
                    <input type="text"
                           ref={node => { input = node; }}
                    />
                    <button onClick={() => {
                        addComment(input.value);
                        input.value = '';
                    }}>
                        Add Comment
                    </button>
                </div>
                <ul>
                    {comments.map(({ id, text, name }) =>
                        <li key={id}>
                            <p>{text}</p>
                            <p>{name}</p>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

CommentList.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            id:   PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    ),
    addComment: PropTypes.func.isRequired,
    isOpen:     PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func.isRequired
};

export default applyToggleOpen(CommentList);
