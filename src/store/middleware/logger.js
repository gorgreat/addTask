export function logger(store) {
    return function wrapDispatch(next) {
        return function handelAction(action) {
            return next(action)
        }        
    }
}