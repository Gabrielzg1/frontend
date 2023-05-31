import React, { useState, useContext } from "react";
import { login } from "../../services/api";
import { useNavigate } from "react-router-dom";
import Loader from "../../Containers/Loader";
import "./styles.css"
import Buttons from "../../Containers/Buttons/index";


const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false)
    const [loading, isLoading] = useState(false)
    const [option, setOption]= useState('')

    const handleSelectedOption = (loginType) => {
        setOption(loginType)
        console.log(option);
      };

    const hadleLogin = async () => {
        setError(false)
        isLoading(true)
        const response = await login(email, password, option)
        console.log(response.data);
        if(response.data.msg == true)
            navigate("/")
        else
            setError(true)
        isLoading(false)         
    }

    if(loading){
        return <Loader/>
    }
    return (
    <div>
      <div class="login-box">
      <p>Login</p>
      <form>
          <div class="user-box">
              <input type="email" name="email" id="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
              <label>Email</label>
          </div>
          <div class="user-box">
              <input type="password" name="password" id="password" value={password} onChange={(e)=>
              setPassword(e.target.value)} />
              <label>Password</label>
          </div>
          {error == true && <p className="error">Email ou senha inválido</p>}
          <a onClick={hadleLogin}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
          </a>
      </form>
      <br />
      <Buttons handleOptionChange={handleSelectedOption} className="buttons"/>

      <p>Don't have an account? <a href="" class="a2">Sign up!</a></p>
  </div>   
  
  </div>
    )}


export default LoginPage
