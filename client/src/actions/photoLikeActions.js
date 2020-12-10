export const ADD_LIKE = 'ADD LIKE'
export const REMOVE_LIKE = 'REMOVE LIKE'



//actions
export const RemoveLike = () => ({
    type: REMOVE_LIKE,
})



//actions linked with thunk
const addLike = (url) => ({
  type: ADD_PHOTO,
  url

})


// Thunks
export const sendLike = (url) => async dispatch => {
  // const res = await fetch('/api/user/id/', {
  //     method: "POST",
  //     headers: {
  //         'Content-Type': 'application/json',
  //         "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
  //     }
  // });
  //TODO add like details to join table for users and likes
  dispatch(addLike())
}
