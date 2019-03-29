const initialState = [{boardName:"asdf"}]


const boards = (state = initialState, action) => {
	switch (action.type) {
    case 'ADD_BOARD':
      return[
        ...state,
        action.payload
      ];
    case 'ADD_BOARDS_ARRAY':
      return [
          ...state,
          ...action.payload
      ]
      	
    default:
      return state
  }
}

export default boards