const INITIAL_STATE = {user: null, status:null, error:null, loading: false};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {
    
    case 'Register_User':// sign in user,  set loading = true and status = signin
    console.log('in reducer');
    return { ...state, user: null, status:'signin', error:null, loading: true}; 
   
    default:
    return state;
  }
}