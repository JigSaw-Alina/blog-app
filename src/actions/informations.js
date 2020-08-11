
import database from  '../firebase/firebase';

// Action reducer
// ADD_INFORMATION
export const addInformation = (informations) => ({
    type: 'ADD_INFORMATION',
    informations
});

export const startAddInformation = (information = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            description = '',
            note = '',
            createdAt = 0
        } = information
    const informations = { description, note, createdAt };
    return database.ref(`users/${uid}/informationData`).push(informations).then((ref) => {
        dispatch(addInformation({
            id: ref.key,
            ...informations
        }));
     });
   };
};


// REMOVE_INFORMATION
export const removeInformation = ({id} = {}) => ({
    type: 'REMOVE_INFORMATION',
    id    
})

export const startRemoveinforamtion = ( { id } = {} ) => {
    return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/informationData/${id}`).remove().then(() => {
            dispatch(removeInformation({ id }))
        })
    }
}

// EDIT_INFORMATION
export const editInfomation = (id, updates) => ({
    type: 'EDIT_INFORMATION',
    id,
    updates,
})


export const startEditinforation = (id, updates) => {
    return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/informationData/${id}`).update(updates).then(() => {
            dispatch(editInfomation(id, updates))
        })
    }
}

// SET_INFORMATIONS

export const setInformations = (informations) => ({
    type: 'SET_INFORMATION',
    informations
});

export const startSetinformations = () => {
    return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/informationData`).once('value').then((snapshot) => {
        const informations = [];

        snapshot.forEach((childSnapshot) => {
           informations.push({
               id: childSnapshot.key,
                ...childSnapshot.val()
           })
        })
            dispatch(setInformations(informations))
      })
    }
}