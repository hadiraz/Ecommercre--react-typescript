import { InputLogin } from "../pages/Login";
import {  InputSignUp } from "../pages/SignUp";

export type Errors ={
    name : string ,
    email : string,
    password : string ,
    confirmPassword : string,
    agree  : boolean | string
}
const checkValues = (signIn ?: InputSignUp , logIn ?: InputLogin) => {    
    const errors : Errors = {
        name : "" ,
        email : "",
        password : "" ,
        confirmPassword : "",
        agree  : false
    }

    if(signIn){
        const {name , email , password , confirmPassword , agree} = signIn ;

        if(name && name.trim().length < 6){
            errors.name = "name must be up to 6 characters";
        }else if(!name){
            errors.name = "name is required"
        }
        
        if(!email){
            errors.email = "email is required"
        }else if(!/\S+@\S+\.\S+/.test(email)){
            errors.email = "enter a valid email"
        }
    
        if(!password){
            errors.password = "password is required"
        }else if(password.length < 6){
            errors.password = "password must be up to 6 characters"
        }
    
        if(confirmPassword !== password){
            errors.confirmPassword = "passwords not match"
        }
    
        if(!agree){
            errors.agree = "terms must be accepted"
        }
    }else if(logIn){
        const {email , password} = logIn ;

        if(!email){
            errors.email = "email is required"
        }else if(!/\S+@\S+\.\S+/.test(email)){
            errors.email = "enter a valid email"
        }

        if(!password){
            errors.password = "password is required"
        }else if(password.length < 6){
            errors.password = "password must be up to 6 characters"
        }

    }

    return errors
}

export default checkValues