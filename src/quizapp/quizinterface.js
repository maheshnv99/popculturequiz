import React from 'react';
import './quizinterface.css';
import {getDCquestions,getMARVELquestions,getANIMEquestions,getAOTquestions,getNATquestions} from './questionlist';
import Questionbox from './questionbox';
import Selector from './selector';


class Quiz_interface extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        questions:[],
        responses:0,
        topic:"DC",
        difficult:"easy",
        score:0

    };
}
componentDidMount(){
    this.refresher();
}

refresher(){
this.setState({
    questions:[],
    responses:0,
    topic:"DC",
    difficulty:"easy",
    score:0,
    

});


}

changetopic(event){
    this.setState({topic:event});
    
}
changedifficulty(event){
this.setState({difficulty:event});


}

getquizquestions(){
let k=this.state.topic;



let question=[];
if (k==="DC"){
    question=getDCquestions(this.state.difficulty);
    
}
if(k==="MARVEL"){
    question=getMARVELquestions(this.state.difficulty);
}
if(k==="ANIME"){
    question=getANIMEquestions(this.state.difficulty);
   }
if (k==="AOT"){
    question=getAOTquestions(this.state.difficulty);

}
if(k==="NARUTO"){
    question=getNATquestions(this.state.difficulty);
}

this.setState({
    questions:question,
    responses:0
});

}
getsolution=(choosen,correct)=>{
if(this.state.responses<5){if(choosen===correct){

    this.setState({
        score:this.state.score+10
    
    })
    }
    this.setState({
        responses:this.state.responses+1
    
    })
    }



}



    render() {
        return (
            <div className="container"><div>
                {/* {  (<div><label className="labels">SELECT TOPIC:</label>
                    <select  className="selectbox" onChange={this.changetopic}>
                            <option value="DC">DC</option>
                            <option value="MARVEL">MARVEL</option>
                            <option value="ANIME">ANIME</option>
                        </select>
                        <label className="labels">SELECT DIFFICULTY:</label>
                        <select className="selectbox" onChange={this.changediffulty}>
                            <option value="easy">EASY</option>
                            <option value="moderate">MODERATE</option>
                            <option value="hard">HARD</option>
                        </select>
                        
                        <button className="startbutton"  onClick={this.getquizquestions}>Start Quiz</button></div>
                        )} */
                        
                        this.state.responses===0 ? (
                        <Selector Box topic={this.state.topic} difficulty={this.state.diffulty}
                        settopic={(selected)=>this.changetopic(selected)}
                        setdifficulty={(selectdiff)=>this.changedifficulty(selectdiff)}
                        startquiz={()=>this.getquizquestions()}
                        
                        
                        />):null
                        
                        
            }
                        
                        


                
            </div>
                <div className="Quizarea">
                    {this.state.questions.length>0 && this.state.responses<5 &&this.state.questions.map(
                        ({question,options,answer,id})=>(
                           
                           <Questionbox question={question} options={options} key={id} answer={answer}
                           selection={(option)=>this.getsolution(option,answer)}
                           
                           
                           />
                           
                        )                        
                    )
                    }
                    {
                        this.state.responses===5 ? ( <div><h2 className="p-2">Your Score</h2><h1 className="p-2">{this.state.score}/50</h1>
                        <button className="btn btn-primary m-2" onClick={()=>this.refresher()}>Retake Quiz</button>
                            </div> 
             ):null

                    }
                    


                </div>
               

            </div>
            
            );
    }
}



export default Quiz_interface;