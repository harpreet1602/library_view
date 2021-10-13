import "./Sidebar.css";
function Sidebar() {
    return (
      <div className="Sidebar">
            <div className="search">
                <input type="search" className="searchbtn" placeholder="search"/>
                <div className="searchicn"><i class="fas fa-search"></i></div>
            </div>
            
            <div className="job">
                <select name="job" id="job">
                <option value="">select job role</option>
                <option value="software engineer">software engineer</option>
                <option value="analyst">analyst</option>
                <option value="support engineer">support engineer</option>
                <option value="clerk">clerk</option>
                </select>
            </div>

            <div className="choose">
                <select name="job" id="jobs">
                <option value="">SKILLS</option>
               
                <option value="software engineer">software engineer</option>
                <option value="analyst">analyst</option>
                <option value="support engineer">support engineer</option>
                <option value="clerk">clerk</option>
                </select>
            </div> 
            <div className="choose">
                <select name="job" id="jobs">
                <option value="">DIFFICULTY</option>
               
                <option value="software engineer">TYPE</option>
                <option value="analyst">analyst</option>
                <option value="support engineer">support engineer</option>
                <option value="clerk">clerk</option>
                </select>
            </div> 
            <div className="choose">
                <select name="job" id="jobs">
                <option value="">TYPE</option>
               
                <option value="software engineer">software engineer</option>
                <option value="analyst">analyst</option>
                <option value="support engineer">support engineer</option>
                <option value="clerk">clerk</option>
                </select>
            </div>
            <div className="choose">
                <select name="job" id="jobs">
                <option value="">RECOMMENDED TIME</option>
               
                <option value="software engineer">software engineer</option>
                <option value="analyst">analyst</option>
                <option value="support engineer">support engineer</option>
                <option value="clerk">clerk</option>
                </select>
            </div> 
            <div className="choose">
                <select name="job" id="jobs">
                <option value="">TAGS</option>
               
                <option value="software engineer">software engineer</option>
                <option value="analyst">analyst</option>
                <option value="support engineer">support engineer</option>
                <option value="clerk">clerk</option>
                </select>
            </div> 
            
      </div>
    );
  }
  
  export default Sidebar;
  