const reducer = (state, action) => {
    
    switch(action.type){
        
        case 'SET_FAVORITE':

            const exist = state.myList[action.profile].find(item => item.id === action.payload.id)

            if (exist) return {...state}

            return {
                myList: {
                    ...state.myList,
                    [action.profile]: [...state.myList[action.profile], action.payload]
                }
            };

        case 'DELETE_FAVORITE':
            return {
                myList: {
                    ...state.myList,
                    [action.profile]: [...state.myList[action.profile].filter(items => items.id !== action.payload)]
                }
            };

        default: 
            return state;
    }

}

export default reducer;