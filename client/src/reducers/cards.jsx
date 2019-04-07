const initialState = [{cardName:"ss"}, {cardName:"saads"}]


const cards = (state = initialState, action) => {
	switch (action.type) {
    case 'ADD_CARD':
      return[
        ...state,
        action.payload
      ];
    case 'ADD_CARD_ARRAY':
      return [
          ...state,
          ...action.payload
      ]
      	
    default:
      return state
  }
}

export default cards