import {ADD_PHOTO} from '../actions/pictureActions'





export const photos = (state = [], action) => {
    Object.freeze(state)
    switch(action.type){
        case ADD_PHOTO:
            return ([
                ...state,
                action.url
            ])
        default:
            return state
    }
}



//if current user is active access slice of state with their id and store all photos in state
// on unmount clear the state