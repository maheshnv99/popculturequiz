import React from 'react';
import './quizinterface.css';

class Selector extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        topic:props.topic,
        difficulty:props.difficulty,
        genre:props.genre,

        
    };
}

changetopic=(event)=>{
    
    this.props.settopic(event.target.value);
    
}
changedifficulty=(event)=>{

this.props.setdifficulty(event.target.value);


}
getquizquestions=()=>{
    
    this.props.startquiz();
}
changegenre=(event)=>{
    this.props.setgenre(event.target.value);
    this.setState({
        genre:event.target.value
    });
}



    render() {
    return (
        <div>
            <div><label className="labels m-2">TOPIC:</label>
                <select onChange={this.changegenre}>
        <option value="comics">Comics</option>
        <option value="Anime">Anime</option>
        <option value="Movies">Movies</option>
       
    </select></div>
    <div>{  this.state.genre==="comics"?(<div className="text-center">
    <span className="lg-col-4 sm-col-12 m-4"><label className="labels m-2">TOPIC:</label>
<select onChange={this.changetopic}>
        <option value="DC">DC</option>
        <option value="MARVEL">MARVEL</option>
       
    </select></span>
    <span className="lg-col-4 sm-col-12 m-4">
    <label className="labels m-2">DIFFICULTY : </label>
    <select onChange={this.changedifficulty}>
        <option value="easy">EASY</option>
        <option value="moderate">MODERATE</option>
        <option value="hard">HARD</option>
    </select>
    </span>
    
    <button className="btn btn-success lg-col-4 sm-col-12 p-2 m-3"  onClick={this.getquizquestions}>Start Quiz</button></div>):null


                    }</div>
    <div>
        {
this.state.genre==="Anime"?(<div className="text-center">
<span className="lg-col-4 sm-col-12 m-4"><label className="labels m-2">TOPIC:</label>
<select onChange={this.changetopic}>
    
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

<button className="btn btn-success lg-col-4 sm-col-12 p-2 m-3"  onClick={this.getquizquestions}>Start Quiz</button></div>):null



}
    </div>
   <div> {
    this.state.genre==="Movies"?(<div className="text-center">
    <span className="lg-col-4 sm-col-12 m-4"><label className="labels m-2">TOPIC:</label>
<select onChange={this.changetopic}>
       
        {/* <option value="ANIME">ANIME</option> */}
        <option value="Harry Potter">Harry Potter</option> 
        <option value="Star Wars">Star Wars</option>
    </select></span>
    <span className="lg-col-4 sm-col-12 m-4">
    <label className="labels m-2">DIFFICULTY : </label>
    <select onChange={this.changedifficulty}>
        <option value="easy">EASY</option>
        <option value="moderate">MODERATE</option>
        <option value="hard">HARD</option>
    </select>
    </span>
    
    <button className="btn btn-success lg-col-4 sm-col-12 p-2 m-3"  onClick={this.getquizquestions}>Start Quiz</button></div>):null


}</div>
    
    </div>
    
       );
    }
}

export default Selector;