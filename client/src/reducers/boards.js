const initialState = ["asdf","two"]


const boards = (state = initialState, action) => {
	switch (action.type) {
    case 'ADD_BOARD':
      return[
        ...state,
        action.payload
      ];
    case 'ADD_BOARD':
      return
      	state.concat(action.payload);
    default:
      return state
  }
}

export default boards