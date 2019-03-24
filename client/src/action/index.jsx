export const addBoard = (payload) => {
  return {type: "ADD_BOARD", payload}
}
export const addBoardsArray = (payload) => {
  return {type: "ADD_BOARDS_ARRAY", payload}
}

export const loadAddPlaces = () => {
  return (dispatch) => {
     console.log("vse ok")
    fetch('/ok')
      .then((res)=>checkStatus(res))
    .then((res)=>res.json())
    .then((cb)=>{
      console.log("sfasf")
      return 0;
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
