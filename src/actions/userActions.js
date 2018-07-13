export function signUpUser(user) {
  console.log(user);
  return {
    type: 'Register_User',
    payload: user
  };
}

