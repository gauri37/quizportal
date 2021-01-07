import react from 'react';
import './MainPage.css';
import {NavLink} from 'react-router-dom'
export default class MainPage extends react.Component {

  openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  render() {
    return (
      <div className="containerback">
        <div className="sidenav">
        <NavLink to="/#about"><h3 className="backfortopic">☰ Quiz Topics</h3></NavLink>
         
          <NavLink to="/quiz">JS Data Type</NavLink>
          <NavLink to="/quiz">Hoisting</NavLink>
          <NavLink to="/quiz">Function</NavLink>
          <NavLink to="/quiz">IIFE</NavLink>
          <NavLink to="/quiz">Closure</NavLink>
          <NavLink to="/quiz">Promises</NavLink>
          <NavLink to="/quiz">JS Object</NavLink>
          <NavLink to="/quiz">let,const,var</NavLink>
          <NavLink to="/quiz">asyc and await</NavLink>
          <NavLink to="/quiz">JS Strict mode</NavLink>
          <NavLink to="/quiz">JS Methods</NavLink>
        </div>

        
        
      
        <div className="usernav">
          <div class="usericon-right">
            <NavLink to="#about">
            <a><i class="fas fa-user fa-1x user-icon"></i>Username</a>
            </NavLink>
          </div>
         </div>
       
          <div className="boxforquiz">
            <div className="section-title">Progress Status</div>
            <div className="sub-title">Overall Quiz</div>
            <div className="sub-title">0/10</div>
            <div className="percentage">0%</div>
          </div>
        </div>
        
        
    );
  }
}





