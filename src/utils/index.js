import { START, SUCCESS, FAIL } from '../constants';

export const asyncApiAction = (dispatch, apiAction, type) => (callback) => {
    dispatch({
        type: type + START
    });

    apiAction()
        .done(response => {
            dispatch({
                type:    type + SUCCESS,
                payload: { response }
            });

            callback(null, null);
        })
        .fail(error => {
            dispatch({
                type:    type + FAIL,
                payload: { error }
            });

            callback(error);
        });
};
