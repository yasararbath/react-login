import React, { useEffect, useState } from "react";
import { loginApi } from "../api/Api";
import { useNavigate, NavLink } from "react-router-dom";
import "./Register.css"
import "../Base.css"
import { userInterface, userModel } from "../constants/constant";

const Register = ()=>{
    const navigate = useNavigate();
    const [formErrors,setFormErrors] =useState<userInterface>(userModel);
    const [isSubmit, setIsSubmit] = useState(false);
    const [userDetails,setUserDetails] = useState<userInterface>(userModel);
 const validateForm = (values: { firstName: any; lastName: any; email: string; password: string | any[]; confirmPassword: any; })=>{
    const error:any = {};
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstName) {
        error.firstName = "First Name is required";
      }
      if (!values.lastName) {
        error.lastName = "Last Name is required";
      }
      if (!values.email) {
        error.email = "Email is required";
      } else if (!regex.test(values.email)) {
        error.email = "This is not a valid email format!";
      }
      if (!values.password) {
        error.password = "Password is required";
      } else if (values.password.length < 4) {
        error.password = "Password must be more than 4 characters";
      } else if (values.password.length > 10) {
        error.password = "Password cannot exceed more than 10 characters";
      }
      if (!values.confirmPassword) {
        error.confirmPassword = "Confirm Password is required";
      } else if (values.confirmPassword !== values.password) {
        error.confirmPassword = "Confirm password and password should be same";
      }
      return error;
 };
 const changeHandler = (e: any) => {
   const { name, value } = e.target;
   setUserDetails({ ...userDetails, [name]: value });
 };
 const formRegister = (e:any) => {
    e.preventDefault();
    setFormErrors(validateForm(userDetails));
    setIsSubmit(true);
    setUserDetails(userDetails)
    navigate("/dashboard", { replace: true });

 };
 useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(userDetails);
        const LoginResponse:any = loginApi(userDetails)
        if(LoginResponse.data.user){
          navigate("/", { replace: true });
        }
    }
  }, [formErrors]);
    return (
    <div className="register">
        <h2>Create your account</h2>
      <form >
        <input type="firstName" name="firstName" id="firstName" placeholder="FirstName" onChange={changeHandler} value={userDetails.firstName} />
        <p className="error">{formErrors.firstName}</p>
        <input type="lastName" name="lastName" id="lastName" placeholder="LastName" onChange={changeHandler} value={userDetails.lastName} />
        <p className="error">{formErrors.lastName}</p>
        <input type="email" name="email" id="email" placeholder="Email" onChange={changeHandler} value={userDetails.email} />
        <p className="error">{formErrors.email}</p>
        <input type="password" name="password" id="password" placeholder="password" onChange={changeHandler} value={userDetails.password} />
        <p className="error">{formErrors.password}</p>
        <input type="confirmPassword" name="confirmPassword" id="ConfirmPassword" placeholder="confirmPassword" onChange={changeHandler} value={userDetails.confirmPassword} />
        <p className="error">{formErrors.confirmPassword}</p>
        <button className="button_common" onClick={formRegister}>
            Register
        </button>
      </form>
      <NavLink to="/login">Already registered? Login</NavLink>
    </div>
    );
}
export default Register;