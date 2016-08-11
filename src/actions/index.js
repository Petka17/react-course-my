import { dispatch } from '../dispatcher';
import { asyncApiAction } from '../utils';

import {
    getArticles,
    getArticleById
} from './api/articles';

import { getComments } from './api/comments';

import {
    LOAD_ALL_ARTICLES,
    LOAD_ARTICLE_BY_ID,
    DELETE_ARTICLE,
    LOAD_ALL_COMMENTS,
    ADD_COMMENT
} from '../constants';

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

export const loadAllArticles =
    asyncApiAction(
        getArticles,
        LOAD_ALL_ARTICLES
    );

export const loadArticleById =
    asyncApiAction(
        getArticleById,
        LOAD_ARTICLE_BY_ID
    );

export const loadAllComments =
    asyncApiAction(
        getComments,
        LOAD_ALL_COMMENTS
    );
