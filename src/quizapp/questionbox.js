import React from 'react';
import './quizinterface.css';

class Questionbox extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        question:props.question,
        options:props.options,
        answer:props.answer,
        click:false,
        
        
    };
}

selected=(event)=>{
    let k=[];
    k.push(event.target.value)
this.setState({
    options:k,
    click:true


    
})
if(k[0]===this.state.answer){

this.setState({
color:"green"
})

}
else{
    this.setState({
        color:"red"
        })

}

this.props.selection(k[0])



}
    render() {
    return (<div className="p-4 m-2"><h2>{this.state.question}</h2>
            {
                    this.state.options.map((value,index)=>(
                    <button className="btn btn-dark m-2" disabled={this.state.click} style={{backgroundColor:`${this.state.color}`}} key={index} value={value} onClick={this.selected}>{value}</button>
                    ))

            }
           
            
    
    </div>);
    }
}

export default Questionbox;