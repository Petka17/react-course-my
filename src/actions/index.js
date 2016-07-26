import { AppDispatcher } from '../dispatcher';
import { asyncApiAction } from '../utils';

import { getArticles } from './api/articles';
import { getComments } from './api/comments';

import {
    LOAD_ALL_ARTICLES,
    DELETE_ARTICLE,
    LOAD_ALL_COMMENTS,
    ADD_COMMENT
} from '../constants';

const dispatch = AppDispatcher.dispatch.bind(AppDispatcher);

export const deleteArticle = (id) => {
    dispatch({
        type:    DELETE_ARTICLE,
        payload: { id }
    });
};

export const addCommentToArticle = (articleId, text) => {
    const id = +Date.now();
    const name = 'Anonymous';

    dispatch({
        type:    ADD_COMMENT,
        payload: {
            comment: { id, name, text },
            articleId
        }
    });
};


export const loadAllComments =
    asyncApiAction(
        dispatch,
        getComments,
        LOAD_ALL_COMMENTS
    );

export const loadAllArticles =
    asyncApiAction(
        dispatch,
        getArticles,
        LOAD_ALL_ARTICLES
    );
