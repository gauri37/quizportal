import react from 'react';
import {Link} from 'react-router-dom';
import './Quiz.css';
import data from './data';
export default class Quiz extends react.Component
{
    constructor() {
        super();
        this.state = { 
            time: {}, 
            seconds: 10*30,
            isActive:false,
            index : 0,
            Answer:"",
            score: 0,
            showScore:false,
        };
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
        this.toggleActive = this.toggleActive.bind(this);
        this.onNextClick = this.onNextClick.bind(this);
    }


    onNextClick(){

        if(this.state.index<data.length-1)
        {
            if(this.state.Answer===data[this.state.index].correctAns)
            {
                const sc = this.state.score;
                this.setState({
                    score: sc+1
                })
            }

            const i = this.state.index+1;

            this.setState({
                index : i
            })

            
            let option = document.querySelectorAll("li.option");
            for (let i = 0; i < option.length; i++) 
            {
                for (let i = 0; i < option.length; i++) 
                    {
                        if (option[i].classList.contains("isactive")) 
                        {
                            option[i].classList.remove("isactive");
                        }
                    }
                 
            }

            console.log(this.state.score)

        }
        
    }

    secondsToTime(secs){
        let hours = Math.floor(secs / (60 * 60));
    
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
    
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
    
        let obj = {
          "h": hours,
          "m": minutes,
          "s": seconds
        };
        return obj;
    }
    
    componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
        this.startTimer();
    }
    
    startTimer() {
        if (this.timer == 0 && this.state.seconds > 0) {
          this.timer = setInterval(this.countDown, 1000);
        }
    }
    
    countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
          time: this.secondsToTime(seconds),
          seconds: seconds,
        });
        
        // Check if we're at zero.
        if (seconds == 0) { 
          clearInterval(this.timer);
        }
    }
    toggleActive()
    {
        let option = document.querySelectorAll("li.option");
        for (let i = 0; i < option.length; i++) 
        {
            option[i].onclick = function()
            {
            for (let i = 0; i < option.length; i++) 
            {
                if (option[i].classList.contains("isactive")) 
                {
                option[i].classList.remove("isactive");
                }
            }
            option[i].classList.add("isactive");
            };
        }
    }

    handleOptionChange(e) {
        this.setState({
          Answer: e.target.value
        });

        //console.log(this.state.Answer);
    }

    render(){
        return(     
            
                    <div className="container1">
                         <div className="topnav">
                         <a><h3 className="titlecolour">Quiz Started</h3></a>
                    <div className="centerstatus">
                        <a><h3 className="titlecolour">No of Questions : 10</h3></a>
                    </div>
        <div className="topnav-right">
            <a href="#about"><i className="fa fa-fw fa-user"></i>Username</a>
        </div>
      </div>  
                        <div className="quizMain">
                               <div>
                                 {this.state.showScore ? <div><h1>Your Score : {this.state.score}</h1></div> : ( 
                                    <div className="card-body quizCard">
                                        <h2 className="">Quiz on Airithmetic</h2>
                                        <p className="quizTimer">{this.state.time.m} : {this.state.time.s}</p>
                                        <h4>Q{data[this.state.index].Qno}: {data[this.state.index].Question}</h4>
                                        <div id="questions">
                                            <ul className="option_group" onClick={this.toggleActive}>
                                                <li className="option" 
                                                    value={data[this.state.index].A}
                                                    onClick={(e)=>this.handleOptionChange(e)}
                                                >    
                                                {data[this.state.index].A}
                                                
                                                </li>
                                                <li className="option"
                                                    value={data[this.state.index].B}
                                                    onClick={(e)=>this.handleOptionChange(e)}
                                                >
                                                {data[this.state.index].B}
                                                
                                                </li>
                                            </ul>
                                            <ul className="option_group">
                                                <li className="option"
                                                    value={data[this.state.index].C}
                                                    onClick={(e)=>this.handleOptionChange(e)}
                                                >
                                                {data[this.state.index].C}
                                                
                                                </li>
                                                <li className="option"
                                                    value={data[this.state.index].D}
                                                    onClick={(e)=>this.handleOptionChange(e)}
                                                >
                                                {data[this.state.index].D}
                                                
                                                </li>
                                            </ul>

                                        </div>  
                                        
                                    </div> )}
                                   
                                </div>
                                {this.state.showScore ? <Link to="/home" className="btnfordashboard">Go To Dashboard</Link> : ( 
                                <div className="quizBtn">
                                    <button  className="btn" 
                                    disabled={this.state.index===0}
                                    onClick={()=>{
                                        if(this.state.index>0)
                                        {
                                            const i = this.state.index;
                                            this.setState({
                                                index : i-1
                                            })
                                        }    
                                    }}>Prev</button> 
                                    <button  className="btn" 
                                    disabled={this.state.index===data.length-1}
                                    onClick={this.onNextClick}>Next</button> 
                                    <button  className="btn" disabled={this.state.index<data.length-1}
                                        onClick={()=>{
                                            this.setState({
                                                showScore : true
                                            })
                                        }}
                                    >Submit</button>    
                                </div> )}
                        </div>
                        
                    </div>            
                                    
        )
    }
}