import "./Card.css";
function Card() {
    return (
      <div className="Card">
          <div className="cardupper">
            <div className="level">MEDIUM</div>
            <div className="score">Score: 50</div>  
          </div>
          <div className="question">Activte Fountain</div>
          <div className="skill">
              <div className="skilltext">Skills:</div>
              <div className="skilllevel">Problem solving(intermediate)</div>
          </div>
          <div className="type">
             <div className="skilltext">Type:</div>
             <div className="skilltext">Coding</div>            </div>
          <div className="tag">
             <div className="skilltext">Tags:</div>  
            <div className="skilltext">Dynamic programming, data structure, Binary search, Problem solving, interviewer guidelines</div> 
          </div>
          </div>
    );
  }
  
  export default Card;
  