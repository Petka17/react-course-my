import SimpleStore from './SimpleStore';

import { register }  from '../dispatcher';

import {
    LOAD_ALL_ARTICLES,
    LOAD_ARTICLE_BY_ID,
    DELETE_ARTICLE,
    ADD_COMMENT,
    START,
    SUCCESS,
    FAIL
} from '../constants';

export default class ArticleStore extends SimpleStore {
    constructor(initialData, stores) {
        super(initialData, stores);

        register(({ type, payload }) => {
            switch (type) {
                case LOAD_ALL_ARTICLES + START:
                    this.loading = true;
                    break;

                case LOAD_ALL_ARTICLES + SUCCESS:
                    payload.response.forEach(this.__add);
                    this.loading = false;
                    break;

                case LOAD_ALL_ARTICLES + FAIL:
                    this.error = payload.error;
                    this.loading = false;
                    break;

                case LOAD_ARTICLE_BY_ID + START:
                    this.getById(payload.data.id).loading = true;
                    break;

                case LOAD_ARTICLE_BY_ID + SUCCESS:
                    this.__add(payload.response);
                    this.getById(payload.data.id).loading = false;
                    break;

                case LOAD_ARTICLE_BY_ID + FAIL:
                    this.getById(payload.data.id).error = payload.error;
                    this.getById(payload.data.id).loading = false;
                    break;

                case DELETE_ARTICLE:
                    this.__delete(payload.id);
                    break;

                case ADD_COMMENT:
                    this.getById(payload.articleId)
                        .comments
                        .unshift(payload.comment.id);
                    break;

                default:
                    return;
            }

            this.__emitChange();
        });
    }
}
