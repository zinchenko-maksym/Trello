const initialState = []


const selectedPlaces = (state = initialState, action) => {
	switch (action.type) {
    case 'ADD_PLACE':
     return[
				...state,
				action.payload
		];
    case 'REMOVE_PLACE':{
    	
    	state.splice(state.indexOf(action.payload),1)
         return state
    		;} 
     case 'CLEAN_SELECTED_PLACES':{
        state=[];
           return state;
         }  
    default:
      return state
  }
}

export default selectedPlaces