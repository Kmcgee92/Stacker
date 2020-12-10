import {GET_ALBUMS, ADD_ALBUM} from '../actions/albumActions'

export const wall = (state={albums: []}, action) => {
  Object.freeze(state)
  const nextState = {...state}
  switch(action.type){
    case GET_ALBUMS:
      nextState.albums = [...action.albums]
      return nextState
    case ADD_ALBUM:
      nextState.albums = [...nextState.albums, action.album]
      return nextState
    default:
      return state;
  }
}