import "./Navbar.css";
function Navbar() {
    return (
      <div className="Navbar">
        <div className="options">
            <div className="option">
            <div className="icn"><i class="fas fa-signal-alt-3"></i></div>
            <div>DASHBOARD</div>
            </div>
            <div className="option">
            <div className="icn"><i class="fas fa-book"></i></div>
            <div>ASSESMENTS</div>
            </div>
            <div className="option">
            <div className="icn"><i class="far fa-user"></i></div>
            <div>CANDIDATES</div>
            </div>
            <div className="option">
            <div className="icn"><i class="far fa-books"></i></div>
            <div>LIBRARY</div>
            </div>
            <div className="option">
            <div className="icn"><i class="fas fa-user-circle"></i></div>
            <div>MY PROFILE</div>
            </div>
        </div>
        <div className="createbtn">
            <div className="test">Create a Test</div> 
            <div className="icn"><i class="fas fa-caret-down"></i></div>
        </div>
      </div>
    );
  }
  
  export default Navbar;
  