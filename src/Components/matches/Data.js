import React from 'react';
import Card from './Card';
import './App.css';

class Data extends React.Component{
    constructor(props){
        super(props);
        this.state={
            arr:[]
        }
        
    }

     getData = () => {
        const url ='https://cricapi.com/api/matches?apikey=F3jEhg9WbiabVALAsStkwrHfj702';
        const promise = fetch(url).then((res)=>{
            return res.json();
        }).catch((error)=>{
            console.log(error);
        }).then((res)=>{
            this.setState({
                arr:res.matches
            })
            console.log(this.state.arr)
        }).catch((error)=>{
            console.log(error);
        });
    }



    render(){
        return(
            <React.Fragment>
              <div className="div_one">
              <button onClick={this.getData}>View Matches</button>
              <Card data={this.state.arr}/>
              </div>
            </React.Fragment>
        );
    }
}

export default Data;