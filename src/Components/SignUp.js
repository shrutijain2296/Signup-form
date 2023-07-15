import React, {useState} from "react";
import LeftSection from "./LeftSection";


const SignUp = () =>{
    let [user, setUser] = useState({name: "", email : "", password: "", confirmPassword: ""});
    let [error, setError] = useState("");
    let [success, setSuccess] = useState("");

    console.log("user", user);

    function validateForm(event){
        event.preventDefault();

        if(user.name.length < 3 || user.name.length > 30){
            setSuccess("")
            return setError("Name should have min length of 3 and max length of 30 ")
        }
        else if(!user.email.includes("@") || !user.email.includes(".")){
            setSuccess("")
            return setError("email should contain @ and .")
        }
        else if(user.password.length < 8 || user.password.length > 15){
            setSuccess("")
            return setError("password should have min length of 8 and max length of 15")
        }
        else if(user.password !== user.confirmPassword){
            setSuccess("")
            return setError("password and confirm password are not matching")
        }
        setSuccess("User registered successfully")
        setError("");
       
    }


    return(
        <div className="signUp">
            <LeftSection />

            <form className="right" onSubmit={validateForm}>
                <h1>Create Account</h1>
                <div className="inputFields">
                    <input type = "text" placeholder = "Full Name" onChange = {(event) => setUser({...user, name: event.target.value})} />

                    <input type = "text" placeholder = "Email Address" onChange = {(event) => setUser({...user, email: event.target.value})} />

                    <input type = "password" placeholder = "Password" onChange = {(event) => setUser({...user, password: event.target.value})} />

                    <input type = "password" placeholder = "Confirm Password" onChange = {(event) => setUser({...user, confirmPassword: event.target.value})} />
                </div>
                {
                    error && <p className = "errorMessage">error: {error}</p>
                }
                {
                    success && <p className = "successMessage">success: {success}</p>
                } 

                <div className = "btn">
                    <button>Create Account</button>
                </div>  

               
                
            </form>
           
           

        </div>
    )
}

export default SignUp;