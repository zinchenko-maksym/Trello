const initialState = [{cardName:"ss", listName:"three"}, {cardName:"saads", listName:"three"}]


const cards = (state = initialState, action) => {
	switch (action.type) {
    case 'ADD_CARD':
      return[
        ...state,
        action.payload
      ];
    case 'ADD_CARDS_ARRAY':
      return [
          ...state,
          ...action.payload
      ]
      	
    default:
      return state
  }
}

export default cards