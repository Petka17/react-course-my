import { AppDispatcher } from '../dispatcher';

import {
    DELETE_ARTICLE,
    ADD_COMMENT
} from '../constants';

export const deleteArticle = (id) => {
    AppDispatcher.dispatch({
        type:    DELETE_ARTICLE,
        payload: { id }
    });
};

export const addCommentToArticle = (articleId, text) => {
    const id = +Date.now();
    const name = 'Anonymous';

    AppDispatcher.dispatch({
        type:    ADD_COMMENT,
        payload: {
            comment: { id, name, text },
            articleId
        }
    });
};
