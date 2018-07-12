const INITIAL_STATE = {user: null, status:null, error:null, loading: false};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {
    
    case 'SIGNIN_USER':// sign in user,  set loading = true and status = signin
    return { ...state, user: null, status:'signin', error:null, loading: true}; 
   
    default:
    return state;
  }
}