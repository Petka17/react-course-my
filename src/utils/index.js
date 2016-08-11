import { dispatch } from '../dispatcher';

import { START, SUCCESS, FAIL } from '../constants';

export const asyncApiAction = (apiAction, type) =>
    (data) =>
        (callback) => {
            dispatch({
                type:    type + START,
                payload: { data }
            });

            apiAction(data)
                .done(response => {
                    dispatch({
                        type:    type + SUCCESS,
                        payload: { response, data }
                    });

                    callback(null, null);
                })
                .fail(error => {
                    dispatch({
                        type:    type + FAIL,
                        payload: { error, data }
                    });

                    callback(error);
                });
        };

