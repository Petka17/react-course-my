import { AppDispatcher } from '../dispatcher';

import { DELETE_ARTICLE } from '../constants';

export const deleteArticle = (id) => {
    AppDispatcher.dispatch({
        type:    DELETE_ARTICLE,
        payload: { id }
    });
};
