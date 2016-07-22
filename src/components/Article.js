import React, { PropTypes } from 'react';

import applyToggleOpen from '../HOC/ToggleOpen';

const Article = ({
    title,
    text,
    isOpen,
    toggleOpen
}) => (
    <div>
        <h3 onClick={toggleOpen}>{title}</h3>
        <div hidden={!isOpen} >
            <section>{text}</section>
        </div>
    </div>
);

Article.propTypes = {
    title:      PropTypes.string.isRequired,
    text:       PropTypes.string.isRequired,
    isOpen:     PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func.isRequired
};

export default applyToggleOpen(Article);
