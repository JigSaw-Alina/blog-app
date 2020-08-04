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

export const setcreatedAt = (creteDate) => ({
    type: 'SET_CREATEDAT',
    creteDate
})


export const setUpdateAt = (endDate) => ({
   type: 'SET_UPDATEAT',
   endDate
})