const defalutState = {
    diarys: [],
    favorites: []
};

export default (state = defalutState, action) => {
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'diarysChange': newState.diarys = action.value; break;
        case 'favoritesChange': newState.favorites = action.value; break;
        default: break
    }
    return newState
}