const initialState = [{_id: "5cd77e2f1150f42f71a4c0f", listName: "123", boardId:"5cb74d41b1", 
  cards:[{_id:"5cc4c54bf3fa9bd4ac26a2", cardName: "ds"}, {_id:"5cc4c54bf3fa9bd4ac26a2a", cardName: "dsaa"}]}];


const lists = (state = initialState, action) => {
	switch (action.type) {
    case 'ADD_LIST':
      return[
        ...state,
        action.payload
      ];
      case 'ADD_CARD':
      /*console.log(state.find((value, index)=>{
        if(value._id===action.payload.listId){
          state[index].cards.push(action.payload.card)
        }

      }

        ), 4)*/
      let foundIndex = state.findIndex(list => list._id===action.payload.listId);
      state[foundIndex].cards.push(action.payload.card);
      console.log(state)
      return [...state];



    case 'DELETE_LIST':
      const listId = action.payload.listId;
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