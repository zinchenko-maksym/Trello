const initialState = {isAuthorized : false , authStatus: ""}


const auth = (state = initialState, action) => {
	switch (action.type) {
    case 'AUTH_SUCCESS':
      localStorage.setItem("token",
        action.payload.token)
      return{
        ...state,
        isAuthorized : true
      };
    case 'AUTH_FAILED':
      return{
        ...state,
        isAuthorized : false,
        authStatus: "Authorization failed"
      }; 	
    default:
      return state
  }
}

export default auth