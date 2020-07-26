import uuid from 'uuid';

// Action reducer
export const addInformation = ({
    description = '',
    note = '',
    createdAt = '',
} = {  
}) => ({
    type: 'ADD_INFORMATION',
    informationData: {
        id: uuid(),
        description,
        note,
        createdAt,
    }
})

export const removeInformation = ({ id } = {}) => ({
    type: 'REMOVE_INFORMATION',
    id    
})

export const editInfomation = (id, update) => ({
    type: 'EDIT_INFORMATION',
    id,
    update
})