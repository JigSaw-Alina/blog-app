// Action filter
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

export const sortByDate = () => ({
    type: 'SORT_BY_DATE',
})

export const sortByAlphabetical = () => ({
    type: 'SORT_BY_ALPHABETICAL',
})

export const setcreatedAt = () => ({
    type: 'SET_CREATEDAT'
})