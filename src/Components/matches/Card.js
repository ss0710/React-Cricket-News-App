import { ContactSupportOutlined } from '@material-ui/icons';
import React from 'react';
import card from './card.css';

class Card extends React.Component{

    constructor(props){
        super(props);
        this.state={
            date:""
        };
        this.parsing = this.parsing.bind(this);
    }


    parsing = (string) => {
        var s = string.slice(0,2);
        var s1= string.slice(3,5);
        var num = parseInt(s);
        var num1 = parseInt(s1);
        num = num + 5; 
        num1 = num1 + 30;  
        if(num1>=60)
        {
            num1=num % 60;
            num++;
        }
        if(num>=24)
        {
            num = num % 24;
        }

        return(num + ":" + num1 + ":" +  "00");
    }

    render(){

        

        return(
            <React.Fragment>
                <div >
                    {

                        this.props.data.map((match)=>{
                            const status = match.matchStarted ? `match finished on ${match.date.slice(0,10)}` : `match on ${match.date.slice(0,10)}`;
                            const result = match.matchStarted ? `Toss winner team : ${match.toss_winner_team}` : ``
                            const winner = match.matchStarted ? `winning Team: ${match.winner_team}` : ``;
                            const divName  = match.matchStarted ? "details_two" : "details_one";
                         return <div className={`${divName}`} data-aos="fade-in" data-aos-duration="2000">
                             <h3>{match.type}</h3>
                             <h4>{`${status}`}</h4>
                             <h2>{match['team-1']} <p className="Vs">VS</p> {match['team-2']}</h2>
                             <h4>Time : {this.parsing.call( this, match.dateTimeGMT.slice(11,19))}</h4>
                             <h4>{`${result}`}</h4>
                             <h4>{`${winner}`}</h4>
                         </div>
                        })
                    }
                </div>
            </React.Fragment>
        );
    }
}

export default Card;