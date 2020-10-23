import React, { Fragment } from 'react';
import player from './player.css';
import PlayerCard from './PlayerCard';
import swal from 'sweetalert';

class Player extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            Pid:[],
            players:[],
        }
        this.eventName = this.eventName.bind(this);
        this.getPlayerID = this.getPlayerID.bind(this);
        this.getPlayer = this.getPlayer.bind(this);
    }

    eventName=(event)=>{
        this.setState({
            name:event.target.value
        })
    }

    getPlayer = () => {
        this.state.Pid.map((arr)=>{
            const url =`https://cricapi.com/api/playerStats?pid=${arr.pid}&apikey=F3jEhg9WbiabVALAsStkwrHfj702`;
        const promise = fetch(url).then((res)=>{
            return res.json();
        }).catch((error)=>{
            console.log(error);
        }).then((res)=>{
            this.setState((prevState) => {
                return{
                  players: prevState.players.concat(res),
                };
              });
        }).catch((error)=>{
            console.log(error);
        });
        })
        
    }



    getPlayerID = () => {
        if(this.state.name)
        {
        this.setState({
            players:[]
        })
        const url =`https://cricapi.com/api/playerFinder?name=${this.state.name}&apikey=F3jEhg9WbiabVALAsStkwrHfj702`;
        const promise = fetch(url).then((res)=>{
            return res.json();
        }).catch((error)=>{
            console.log(error);
        }).then((res)=>{
            this.setState({
                Pid:res.data
            });
            this.getPlayer();
            console.log(res.data);
        }).catch((error)=>{
            console.log(error);
        });
    }else{
        swal("Type a name and then search","","error");
    }
}



    render(){
        return (
            <Fragment>
                <div className="Player_div">
                    <input value={this.state.name} placeholder="search name..." onChange={this.eventName}></input><br/>
                    <button onClick={this.getPlayerID}>SEARCH</button>
                    <PlayerCard data={this.state.players}/>
                </div>
            </Fragment>
        );
    }
}

export default Player;