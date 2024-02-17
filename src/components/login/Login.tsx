import React, { useEffect, useState } from "react";
import { loginApi } from "../api/Api";
import { useNavigate, NavLink } from "react-router-dom";
import { userInterface, userModel } from "../constants/constant";
import "./Login.css";
import "../Base.css";

const Login = ({setUserState}:any)=>{
    const navigate = useNavigate();
    const [user, setUserDetails] = useState<userInterface>(userModel);
  const [formErrors, setFormErrors] = useState<userInterface>(userModel);
  const [isSubmit, setIsSubmit] = useState(false);

  const validateForm = (value: {email:any,password:any})=>{
    const  error:any ={};
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!value.email){
        error.email = "Please enter a valid email address";
    }else if (!regex.test(value.email)) {
        error.email = "Please enter a valid email address";
      }
    if (!value.password) {
        error.password = "Password is required";
      }
      return error;
  }
    const changeHandler = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target;
        setUserDetails({
        ...user,
        [name]: value,
        });
    };
    const formSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        setFormErrors(validateForm(user));
        setIsSubmit(true);
        // if (!formErrors) {

        // }
        const userS= {_id:3,user:'test'}
        setUserState(userS);
        navigate("/dashboard", { replace: true });
    };
    useEffect( () => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(user);
          const LoginResponse:any = loginApi(user)
          if(LoginResponse.data.user){
            setUserState(LoginResponse.data.user);
            navigate("/", { replace: true });
          }
        }
      }, [formErrors]);
    return(
        <div className="login">
          <h2>Login</h2>
        <form >
            <input type="email" name="email" id="email" placeholder="Email" onChange={changeHandler} value={user.email} />
            <p className="error">{formErrors.email}</p>
            <input type="password" name="password" id="password" placeholder="Password" onChange={changeHandler} value={user.password} />
            <p className="error">{formErrors.password}</p>
        <button className="button_common" onClick={formSubmit}>
            Login
        </button>
        </form>
        <NavLink to="/register">Not yet registered? Register Now</NavLink>
        </div>
    )
}
export default Login;