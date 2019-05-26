const initialState = []


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
    case 'DELETE_CARD':
      const cardId = action.payload.cardId;
      return state.filter(card => card._id !== cardId)
    default:
      return state
  }
}

export default cards