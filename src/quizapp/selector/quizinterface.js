import React from 'react';
import './quizinterface.css';
import {getDCquestions,getMARVELquestions,getANIMEquestions,getAOTquestions,getNATquestions} from './questionlist';
import Questionbox from './questionbox';
import Selector from './selector';
import Timer from './timer'


class Quiz_interface extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        questions:[],
        responses:0,
        topic:"DC",
        difficult:"easy",
        score:0,
        settimer:false,
        timer:60,
        genre:"comics"

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
    settimer:false,
    timer:60,
    genre:"comics"
    
    

});


}
changegenre(event){
this.setState({
    genre:event,
    
});
if(event=="comics"){
    this.setState({
        topic:"DC",
        difficult:"easy"
    })

}
if(event=="Anime"){
    this.setState({
        topic:"AOT",
        difficult:"easy"
    })

}

if(event=="Movies"){
    this.setState({
        topic:"Harry Potter",
        difficult:"easy"
    })

}

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
    responses:0,
    settimer:true,
    timer:60
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
timeout(){
    console.log("timeout");
this.setState({

timer:60,
settimer:false,
responses:5

}
);


}



    render() {
        return (
            <div className="container"><div>
                {
                        this.state.responses===0 ? (
                        <Selector Box topic={this.state.topic} genre={this.state.genre} difficulty={this.state.diffulty}
                        settopic={(selected)=>this.changetopic(selected)}
                        setdifficulty={(selectdiff)=>this.changedifficulty(selectdiff)}
                        startquiz={()=>this.getquizquestions()}
                        setgenre={(setgenre)=>this.changegenre(setgenre)}
                        
                        
                        />):null
                        
                        
            }
                        
                        


                
            </div>
            <div>
                    { this.state.settimer===true && this.state.responses<5 ?(<Timer initialtimer={this.state.timer} timeout={()=>this.timeout()} />):null


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