const initialState = []


const auth = (state = initialState, action) => {
	switch (action.type) {
    case 'LOGIN_SUCCESS':
      localStorage.setItem("token",
        action.payload.token)
      return{
        ...state
      };
      	
    default:
      return state
  }
}

export default auth