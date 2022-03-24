function getLocalStorage(key, defaultValue){
    const data = localStorage.getItem(key);    
    if(data){
        const json = JSON.parse(data);
        return json;
    } else {
        return defaultValue;
    }
}
export default getLocalStorage;