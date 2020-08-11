// inforamtion Reducer

const inforamtionReducerDefaultState = []
export default ((state = inforamtionReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_INFORMATION':
            return [
                ...state,
                action.informations
            ]
        case 'REMOVE_INFORMATION':
            return state.filter(({ id }) => id !== action.id )
        case 'EDIT_INFORMATION':
            return state.map((data) => {
                return (data.id === action.id) ? ({...data, ...action.updates }) : (data)
            })
        case 'SET_INFORMATION':
            return action.informations
        default:
            return state;
        
    }
})

