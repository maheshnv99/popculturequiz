import React from 'react';

class Timer extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        timer:props.initialtimer
    };
}
componentDidMount(){
    this.timer=setInterval(()=>{
this.setState({
    timer:this.state.timer-1
})
if (this.state.timer==0){
    this.setState({timer:60});
    this.props.timeout();
   
}


    },1000);
}
componentWillUnmount(){

clearInterval(this.timer);

}

    render() {
    return <div><h1>Time Left:{this.state.timer}</h1></div>;
    }
}


// #endregion

export default Timer;