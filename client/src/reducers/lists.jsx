const initialState = [];


const lists = (state = initialState, action) => {
	switch (action.type) {
    case 'ADD_LIST':
      return[
        ...state,
        action.payload
      ];
    case 'DELETE_LIST':
    console.log(action.payload.id)
      const listId = action.payload.id;
      return state.filter(list => list._id !== listId)
    case 'ADD_LISTS_ARRAY':
      return [
          ...state,
          ...action.payload
      ];
    
    default:
      return state
  }
}

export default lists