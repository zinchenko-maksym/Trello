const initialState = [{listName:"three"}, {listName:"one"}]


const lists = (state = initialState, action) => {
	switch (action.type) {
    case 'ADD_LIST':
      return[
        ...state,
        action.payload
      ];
    case 'ADD_LISTS_ARRAY':
      return [
          ...state,
          ...action.payload
      ]
    default:
      return state
  }
}

export default lists