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
export const deleteList = (payload) => {
  console.log(payload)
  return {type: "DELETE_LIST", payload}
}

export const deleteListRequest = (data) => {
  return (dispatch) => {
    
    fetch('/cardList/deleteList', {
      method: "DELETE",
      headers:{
        'Accept': 'application/json, text/plain',
        'Content-type':'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((res)=>checkStatus(res))
    .then((res)=>res.json())
    .then((cb)=>{
      return dispatch(deleteList(data));
    });
  }
};
export const sendBoardToServer = (data) => {
  return (dispatch) => {
    
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
      
      return dispatch(addBoard(cb.boards));
    });
  }
};
export const sendListToServer = (data) => {
  let adress= /b\/([a-z1-9]+)/.exec(window.location.href) 
  return (dispatch) => {
     
    fetch(`${adress[1]}/newList`, {
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
      
      return dispatch(addList(cb.list));
    });
  }
};
export const sendCardToServer = (data) => {
  
  /*return (dispatch)=>{dispatch(addCard(data))}*/
  return (dispatch) => {
    fetch('/b/newCard', {
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

export const requestCardsAndLists = (data) => {
  let adress= /b\/([a-z1-9]+)/.exec(window.location.href) 
  console.log(adress[1])
  return (dispatch) => {
    fetch(adress[1])
    .then((res)=>checkStatus(res))
    .then((res)=>res.json())
    .then((cb)=>{
      
       dispatch(addListsArray(cb.lists));
      return dispatch(addCardsArray(cb.cards))
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

