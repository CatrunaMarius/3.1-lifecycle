import React from 'react';

class Lifecycles extends React.Component{
    constructor(){
        super();
        console.log('constructor!');
    }

    componentDidMount(){
        console.log('componentDidMount');
    }

    componentDidUpdate(){
        console.log('componentDidUpdate');
    }

    // se floseste pentru a elibera memoria din browser
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate', nextProps);
        return true;
    }

    render(){
        console.log('reander');
        return(
            <div className= 'lifecycles'>
                <h3>Lifecycles Component</h3>
                {this.props.text}
            </div>
        )
    }

}