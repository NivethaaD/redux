//rfce
import React from 'react'
import {useDispatch} from 'react-redux';
import {login} from './features/user';

function Login() {

  const dispatch=useDispatch();
  return (
    <div>
       <button onClick={()=> dispatch(login(

        {name:"Nive",age:21,email:"xyz@gmail.com"}

  ))}>Login</button>

    </div>
  )
}

export default Login;
