import uuid from 'uuid';
import database from  '../firebase/firebase';




// Action reducer
export const addInformation = (informations) => ({
    type: 'ADD_INFORMATION',
    informations
});

export const startAddInformation = (information = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            createdAt = 0
        } = information
    const informations = { description, note, createdAt };
    database.ref('informationData').push(informations).then((ref) => {
        dispatch(addInformation({
            id: ref.key,
            ...informations
        }));
     });
   };
};



export const removeInformation = ({ id } = {}) => ({
    type: 'REMOVE_INFORMATION',
    id    
})

export const editInfomation = (id, updates) => ({
    type: 'EDIT_INFORMATION',
    id,
    updates,
})