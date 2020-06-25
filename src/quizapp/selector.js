import React from 'react';
import './quizinterface.css';

class Selector extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        topic:props.topic,
        difficulty:props.difficulty

        
    };
}

changetopic=(event)=>{
    
    this.props.settopic(event.target.value);
    
}
changedifficulty=(event)=>{

this.props.setdifficulty(event.target.value)


}
getquizquestions=()=>{
    
    this.props.startquiz();
}



    render() {
    return (<div className="text-center">
        <span className="lg-col-4 sm-col-12 m-4"><label className="labels m-2">TOPIC:</label>
    <select onChange={this.changetopic}>
            <option value="DC">DC</option>
            <option value="MARVEL">MARVEL</option>
            {/* <option value="ANIME">ANIME</option> */}
            <option value="AOT">ATTACK ON TITAN</option> 
            <option value="NARUTO">NARUTO</option>
        </select></span>
        <span className="lg-col-4 sm-col-12 m-4">
        <label className="labels m-2">DIFFICULTY : </label>
        <select onChange={this.changedifficulty}>
            <option value="easy">EASY</option>
            <option value="moderate">MODERATE</option>
            <option value="hard">HARD</option>
        </select>
        </span>
        
        <button className="btn btn-success lg-col-4 sm-col-12 p-2 m-3"  onClick={this.getquizquestions}>Start Quiz</button></div>
       );
    }
}

export default Selector;