import Sidebar from "./Sidebar";
import Section from "./Section";
import "./Content.css";
function Content() {
    return (
      <div className="Content">        
        <Sidebar/>
        <Section/>
      </div>
    );
  }
  
  export default Content;