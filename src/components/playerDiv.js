import React, { Component } from 'react';
import bootstrap from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import RockLogo from '../images/rock.png';
import PaperLogo from '../images/paper.png';
import ScissorsLogo from '../images/scissors.png';


    
class playerDiv extends Component {
    render() {
        return (
            <div className={this.props.player === 'playerOne' ? 'playerOneDiv' : 'playerTwoDiv'}>   
                <h1 className="titlePlayer">{this.props.player === 'playerOne' ? 'Mario' : 'Luigi'}</h1>

                <Button className="gameChoiceButton" bsSize="large" onClick={() => this.props.playerChoices.rock("rock")}
                style={{'box-shadow': this.props.choiceSelected === 'Rock' ? '#9ACDFB 0px 0px 20px 15px' : 'none'}}>
                    <img src={RockLogo} alt=""/>
                </Button>

                <Button className="gameChoiceButton" bsSize="large" onClick={() => this.props.playerChoices.paper("paper")} 
                style={{'box-shadow': this.props.choiceSelected === 'Paper' ? '#9ACDFB 0px 0px 20px 15px' : 'none'}}>
                    <img src={PaperLogo} alt=""/>
                </Button>

                <Button bsSize="large" onClick={() => this.props.playerChoices.scissors("scissors")}
                style={{'box-shadow': this.props.choiceSelected === 'Scissors' ? '#9ACDFB 0px 0px 20px 15px' : 'none'}}>
                    <img src={ScissorsLogo} alt=""/>
                </Button>
            </div>
        );
    }
}

export default playerDiv;