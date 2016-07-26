import SimpleStore from './SimpleStore';

import { AppDispatcher }  from '../dispatcher';
import {
    DELETE_ARTICLE,
    ADD_COMMENT,
    LOAD_ALL_ARTICLES,
    SUCCESS
} from '../constants';

export default class ArticleStore extends SimpleStore {
    constructor(initialData, stores) {
        super(initialData, stores);

        AppDispatcher.register(({ type, payload }) => {
            switch (type) {
                case DELETE_ARTICLE:
                    this.__delete(payload.id);
                    break;

                case ADD_COMMENT:
                    this.getById(payload.articleId)
                        .comments
                        .unshift(payload.comment.id);
                    break;

                case LOAD_ALL_ARTICLES + SUCCESS:
                    payload.response.forEach(this.__add);
                    break;

                default:
                    return;
            }

            this.__emitChange();
        });
    }
}
