export function thunk({getState, dispatch}) {
    return function wrapDispatch(next) {
        return function handelAction(action) {
            if (typeof action === "function") {
                action(dispatch, getState);
            } else {
                return next(action)
            }

        }        
    }
}