export const ADD_PHOTO = 'ADD PHOTO'
// export const REMOVE_PHOTOS = 'REMOVE PHOTOS'


// //actions
// export const removePhotos = () => ({
//     type: REMOVE_PHOTOS,
// })



//actions linked with thunk
const addPhoto = (url) => ({
    type: ADD_PHOTO,
    url

})


// Thunks
export const sendPhoto = (url) => async dispatch => {
    // const res = await fetch('/api/user/id/', {
    //     method: "POST",
    //     headers: {
    //         'Content-Type': 'application/json',
    //         "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
    //     }
    // });
    //TODO add photo url to join table for users
    dispatch(addPhoto(url))
}

