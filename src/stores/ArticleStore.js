import SimpleStore from './SimpleStore';

import { AppDispatcher }  from '../dispatcher';
import { DELETE_ARTICLE } from '../constants';

export default class ArticleStore extends SimpleStore {
    constructor(initialData) {
        super(initialData);

        AppDispatcher.register(({ type, payload }) => {
            switch (type) {
                case DELETE_ARTICLE:
                    this.__delete(payload.id);
                    this.__emitChange();
                    break;
                default:
                    break;
            }
        });
    }
}
