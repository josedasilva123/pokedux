const localStorage = (store) => (next) => (action) => {
    if(action.meta !== undefined){
        window.localStorage.setItem(action.meta, JSON.stringify(action.payload));
    }
    return next(action);
}
export default localStorage;