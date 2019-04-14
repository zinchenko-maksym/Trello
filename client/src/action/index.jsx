export const addBoard = (payload) => {
  return {type: "ADD_BOARD", payload}
}
export const addBoardsArray = (payload) => {
  return {type: "ADD_BOARDS_ARRAY", payload}
}
export const addCard = (payload) => {
  return {type: "ADD_CARD", payload}
}
export const addCardsArray = (payload) => {
  return {type: "ADD_CARDS_ARRAY", payload}
}
export const addList = (payload) => {
  return {type: "ADD_LIST", payload}
}
export const addListsArray = (payload) => {
  return {type: "ADD_LISTS_ARRAY", payload}
}

export const sendBoardToServer = (data) => {
  return (dispatch) => {
     console.log(data)
    fetch('/boards', {
      method: "POST",
      headers:{
        'Accept': 'application/json, text/plain',
        'Content-type':'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((res)=>checkStatus(res))
    .then((res)=>res.json())
    .then((cb)=>{
      console.log(cb)
      return dispatch(addBoard(cb.boards));
    });
  }
};
export const sendListToServer = (data) => {
  return (dispatch) => {
     
    fetch('/cardList/newList', {
      method: "POST",
      headers:{
        'Accept': 'application/json, text/plain',
        'Content-type':'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((res)=>checkStatus(res))
    .then((res)=>res.json())
    .then((cb)=>{
      console.log(cb)
      return dispatch(addList(cb.list));
    });
  }
};
export const sendCardToServer = (data) => {
  return (dispatch) => {
    fetch('/cardList/newCard', {
      method: "POST",
      headers:{
        'Accept': 'application/json, text/plain',
        'Content-type':'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((res)=>checkStatus(res))
    .then((res)=>res.json())
    .then((cb)=>{
      
      return dispatch(addCard(cb.card));
    });
  }
};
export const requestBoardsList = (data) => {

  return (dispatch) => {
     
    fetch('/boards')
    .then((res)=>checkStatus(res))
    .then((res)=>res.json())
    .then((cb)=>{
      
      return dispatch(addBoardsArray(cb.boards));
    });
  }
};
export const requestLists = (data) => {
  return (dispatch) => {
     
    fetch('/newList')
    .then((res)=>checkStatus(res))
    .then((res)=>res.json())
    .then((cb)=>{
       
      return dispatch(addListsArray(cb));
    });
  }
};
export const requestCardsAndLists = (data) => {
  return (dispatch) => {
    fetch('/cardList')
    .then((res)=>checkStatus(res))
    .then((res)=>res.json())
    .then((cb)=>{
      dispatch(addListsArray(cb.list));
      return dispatch(addCardsArray(cb.card));
    });
  }
};

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error);
  throw error;
}
/*
export const sendPlacesToServer = (places)=> {
  
  let arrOfPlaces= '[';
  if(places.length===0){
    return {type: "", places}
  }
  for (var i = 0; i < places.length; i++) {
    arrOfPlaces+=JSON.stringify({pl: places[i]})+",";
  }
  arrOfPlaces=arrOfPlaces.slice(0,-1)+"]";
  
  return (dispatch) => {
    fetch('/ok', {
      method: "POST",
      headers:{
        'Accept': 'application/json, text/plain',
        'Content-type':'application/json'
      },
      body: arrOfPlaces
  })
      .then((res)=>checkStatus(res))

  }
}*/
