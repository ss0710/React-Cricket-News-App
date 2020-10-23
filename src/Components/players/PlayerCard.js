import { Height } from '@material-ui/icons';
import React, { Fragment } from 'react';
import './playercard.css';

class PlayerCard extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
            <Fragment>
                <div>
                {
                    this.props.data.map((player)=>{
                        return <div className="playerCard_div" data-aos="fade-in" data-aos-duration="2000">
                            <img  className="Player-img" src={`${player.imageURL}`} alt="Player-image"/>
                            <h2>{player.fullName}</h2>
                            <h3>{player.playingRole}</h3>
                            <h3>{player.country}</h3>
                            <h4>Born: {player.born}</h4> 
                            <h5>Profile: <br/> {player.profile}</h5>
                            <h4></h4>
                        </div>
                    })
                }
                </div>
            </Fragment>
        );
    }
}

export default PlayerCard;