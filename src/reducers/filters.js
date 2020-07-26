// filter Reducer

const filterReducerDefaulState = {
    text: '',
    sortBy: 'date',
}
export default ((state = filterReducerDefaulState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SORT_BY_ALPHABETICAL':
            return {
                ...state,
                sortBy: 'alphabetical'
            }  
        default:
            return state ;
    }
})