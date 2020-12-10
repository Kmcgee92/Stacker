import Cookies from "js-cookie";
export const GET_ALBUMS = "GET ALBUMS";
export const ADD_ALBUM = "ADD ALBUM";



//!ACTIONS
export const getAlbums = (albums) => {
  //albums is an array of album objects
  return {
    type: GET_ALBUMS,
    albums
  }
}
export const addAlbum = (album) => {
  //each album has id, name, userId, CA, UA
  console.log("created",album)
  return {
    type: ADD_ALBUM,
    album
  }
}


//! THUNKS
//fetch all albums
export const fetchAlbums = (id) => {
  return async dispatch => {
    const res = await fetch(`/api/albums/${id}`)
    if (res.ok) {
      const data = await res.json();
      dispatch(getAlbums(data));
    }
    return res;
  };
};




export const addAlbumToUser = (name, userId) => {
  return async dispatch => {
    const res = await fetch(`/api/albums`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
      },
      body: JSON.stringify({ name, userId }),
    });

    if (res.ok) {
      const data = await res.json();
      dispatch(addAlbum(data));
    }
    return res;
  };
};

