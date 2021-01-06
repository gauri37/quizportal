import react from 'react';
import './StartPage.css';
import Login from './Login';
import MainPage from './MainPage';

export default class StartPage extends react.Component
{
    constructor()
    {
        super();
        this.state = {
            isBtnClicked : false,
            isLoggedIn : false,
        }
        this.btnClicked = this.btnClicked.bind(this);
        this.loginHandler = this.loginHandler.bind(this);
    }

    btnClicked(){
        this.setState({
            isBtnClicked : true
        })
    }

    loginHandler(username,password)
    {
        if(username.trim()!=="" && password.trim()!=="")
        {
            if(username==='Gauri' && password==="Gauri@37")
            {
                this.setState({
                    isLoggedIn: true,
                })
            }
            else
            {
                alert("Wrong username and Password");
            }
        }
        else
        {
            alert("all fields must be compulsury");
        }
    }

    render()
    {
        return (
            
                
            this.state.isLoggedIn ? (<MainPage />): (
            
            this.state.isBtnClicked ? <Login 
            loginHandler = {this.loginHandler}
            /> : (
                <div>
            <div className="quizpage">
                <button className="gotologin" onClick={this.btnClicked}>
               Get Started Now!</button>
               </div>              
            </div>)
            )
        )
        
    }
}
