import React from 'react';

class Timer extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        timer:props.initialtimer,
        tclass: "badge badge-success timer m-4"
    };
}
componentDidMount(){
    this.timer=setInterval(()=>{
this.setState({
    timer:this.state.timer-1
})

if (this.state.timer < 11) {
    this.setState({
    tclass:"badge badge-danger timer m-4"
})
}

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
    return <div><h2 className={this.state.tclass}>Time Left : {this.state.timer}</h2></div>;
    }
}


// #endregion

export default Timer;