import react from 'react';
import './SignUp.css';
export default class signup extends react.Component
{
    render()
    {
        return (
                <div className="signupbackground">
                <div className="signupdiv">
                <form class="signupform-start">
                <span class="signuptitle">
                Create Account	
                </span>
                <div class="signupuser-div">
                    <input type="text" class="signupinputcss-user" name="firstName" placeholder="Enter FirstName"/>
                </div>

                <div class="signupuser-div">
                    <input type="text" class="signupinputcss-user" name="lastname" placeholder="Enter Lastname"/>
                </div>

                <div class="signupuser-div">
                    <input type="email" class="signupinputcss-email" name="Email" placeholder="Enter Email" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"/>
                </div>
                
                <div class="signupuser-div">
                    <input type="password" class="signupinputcss-pass" name="password" placeholder="Enter Password"/>
                </div>

                

                <button className="btnsignup">Sign Up</button> 
               
                
                </form>
                </div>
            </div>
           
            
        )
    }
}