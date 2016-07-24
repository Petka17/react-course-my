import SimpleStore from './SimpleStore';

import { AppDispatcher }  from '../dispatcher';
import { ADD_COMMENT } from '../constants';

export default class CommentStore extends SimpleStore {
    constructor(initialData, stores) {
        super(initialData, stores);

        AppDispatcher.register(({ type, payload }) => {
            switch (type) {
                case ADD_COMMENT:
                    this.__add(payload.comment);
                    break;
                default:
                    break;
            }
        });
    }
}
