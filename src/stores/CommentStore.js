import SimpleStore from './SimpleStore';

import { register }  from '../dispatcher';
import {
    LOAD_ALL_COMMENTS,
    ADD_COMMENT,
    SUCCESS
} from '../constants';

export default class CommentStore extends SimpleStore {
    constructor(initialData, stores) {
        super(initialData, stores);

        register(({ type, payload }) => {
            switch (type) {
                case ADD_COMMENT:
                    this.__add(payload.comment);
                    break;

                case LOAD_ALL_COMMENTS + SUCCESS:
                    payload.response.records.forEach(this.__add);
                    break;

                default:
                    break;
            }
        });
    }
}
