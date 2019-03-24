export const addBoard = (payload) => {
  return {type: "ADD_BOARD", payload}
}

/*

export const onCleanPlaces = () => {

  return (dispatch) => {
    
    fetch('/drop')
    .then(()=>{
      return dispatch(cleanPlaces());
    });
  }
};

export const loadAddPlaces = () => {

  return (dispatch) => {
    
    fetch('/ok')
      .then((res)=>checkStatus(res))
    .then((res)=>res.json())
    .then((cb)=>{
      let arr=[];
      
      cb.map((value)=>{        
        arr = arr.concat(value.pl);
        return arr;
      })
      return dispatch(shiftPlaces(arr));
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
