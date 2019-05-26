export const addBoard = (payload) => {
  return {type: "ADD_BOARD", payload}
}
export const addBoardsArray = (payload) => {
  return {type: "ADD_BOARDS_ARRAY", payload}
}
export const addCard = (payload) => {
  return {type: "ADD_CARD", payload}
}
export const deleteCard = (payload) => {
  return {type: "DELETE_CARD", payload}
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
  return {type: "DELETE_LIST", payload}
}
export const authSuccess = (payload) => {
  return {type: "AUTH_SUCCESS", payload}
}
export const authFailed = (payload) => {
  return {type: "AUTH_FAILED", payload}
}


export const fetchSignUp = (data) => {
  return (dispatch) => {
    fetch('/user/signup', {
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
      window.location.href = "http://localhost:3000/boards"               //Change to url
    })
    .catch((err)=>{
      console.log(err)
      dispatch(authFailed())
    });
  }
};

export const fetchLogIn = (data) => {
  return (dispatch) => {
    
    fetch('/user/login', {
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
      
      alert(cb)
      dispatch(authSuccess(cb));
      window.location.href = "http://localhost:3000/boards/"+ cb.adressName
    })
    .catch((err)=>{
      console.log(err)
      dispatch(authFailed())
    });
  }
};


export const sendBoardToServer = (data) => {
  let adress= /boards\/([a-z1-9]+)/.exec(window.location.href) 
  return (dispatch) => {
    console.log(`bearer ${localStorage.getItem("token")}` )
    fetch(adress[1], {
      method: "POST",
      headers:{
        'Accept': 'application/json, text/plain',
        'Content-type':'application/json',
        'Authorization': `bearer ${localStorage.getItem("token")}` 
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


export const requestBoardsList = (data) => {
  let adress= /boards\/([a-z1-9]+)/.exec(window.location.href) 
  console.log(`boardspage/${adress[1]}`)
  return (dispatch) => {
     
    fetch(`getboards/${adress[1]}`)
    .then((res)=>checkStatus(res))
    .then((res)=>res.json())
    .then((cb)=>{
      
      return dispatch(addBoardsArray(cb.boards));
    });
  }
};

//List
export const requestCardsAndLists = (data) => {
  let adress= /b\/([a-z1-9]+)/.exec(window.location.href) 
  console.log(adress[1])
  return (dispatch) => {
    fetch(adress[1])
    .then((res)=>checkStatus(res))
    .then((res)=>res.json())
    .then((cb)=>{
      
      return dispatch(addListsArray(cb.lists));
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
        'Content-type':'application/json',
        'Authorization': `bearer ${localStorage.getItem("token")}` 
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
export const deleteListRequest = (data) => {
  return (dispatch) => {
    
    fetch('/b/deleteList', {
      method: "DELETE",
      headers:{
        'Accept': 'application/json, text/plain',
        'Content-type':'application/json',
        'Authorization': `bearer ${localStorage.getItem("token")}` 
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
//Card
export const sendCardToServer = (data) => {

  return (dispatch) => {
    console.log(data)
    fetch('/b/newCard', {
      method: "POST",
      headers:{
        'Accept': 'application/json, text/plain',
        'Content-type':'application/json',
        'Authorization': `bearer ${localStorage.getItem("token")}` 
      },
      body: JSON.stringify(data)
    })
    .then((res)=>checkStatus(res))
    .then((res)=>res.json())
    .then((cb)=>{
      console.log(cb.card)
      return dispatch(addCard(cb));
    });
  }
};
export const deleteCardRequest = (data) => {
  return (dispatch) => {
    
    fetch('/b/deleteCard', {
      method: "DELETE",
      headers:{
        'Accept': 'application/json, text/plain',
        'Content-type':'application/json',
        'Authorization': `bearer ${localStorage.getItem("token")}` 
      },
      body: JSON.stringify(data)
    })
    .then((res)=>checkStatus(res))
    .then((res)=>res.json())
    .then((cb)=>{
      return dispatch(deleteCard(data));
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

