import React, { Component } from 'react';
import bootstrap from 'react-bootstrap';
import '../style/display.css';
import { Button } from 'react-bootstrap';

import PlayerDiv from './playerDiv';

import RockLogo from '../images/rock.png';
import PaperLogo from '../images/paper.png';
import ScissorsLogo from '../images/scissors.png';


class Display extends Component {
    constructor(props) {
        super(props);
            this.state = {
                choicePlayerOne : null,
                choicePlayerTwo : null,
                final : '',
                userScore : 0,
                computerScore : 0
            };
    };   

    gameChoicePlayerOne = (choice) => {
            if (choice === 'rock') {
               this.setState({
                    choicePlayerOne: "Rock"
            })

            } else if (choice === 'paper') {
                this.setState({
                    choicePlayerOne: "Paper"
            });
            } else {
                this.setState({
                    choicePlayerOne: "Scissors"
            }) 
           }               
    }

    gameChoicePlayerTwo = (choice) => {
            if (choice === 'rock') {
               this.setState({choicePlayerTwo: "Rock"})

            } else if (choice === 'paper') {
                this.setState({
                    choicePlayerTwo: "Paper"
                });
            } else {
                this.setState({
                choicePlayerTwo: "Scissors"
              }) 
           }               
    }

    finalScore = () => {
            let userSco = this.state.userScore
            let compSco = this.state.computerScore

            if(this.state.choicePlayerOne === this.state.choicePlayerTwo) {
                this.setState({
                final: "Draw !"
                });
            }
            else if(this.state.choicePlayerOne === 'Rock' && this.state.choicePlayerTwo === 'Scissors' 
                    || this.state.choicePlayerOne === 'Paper' && this.state.choicePlayerTwo === 'Rock' 
                    || this.state.choicePlayerOne === 'Scissors' && this.state.choicePlayerTwo === 'Paper') {
                this.setState({
                    final: "Mario wins !" ,
                    userScore: userSco + 1
                    });            
            }
            else this.setState({
                final: "Luigi wins !" ,
                computerScore: compSco + 1
                });
    }       

    render() {
        return (
            <div>
                <PlayerDiv player='playerOne' playerChoices={{rock: this.gameChoicePlayerOne, paper: this.gameChoicePlayerOne, scissors: this.gameChoicePlayerOne}} choiceSelected={this.state.choicePlayerOne}/>
                <PlayerDiv player='playerTwo' playerChoices={{rock: this.gameChoicePlayerTwo, paper: this.gameChoicePlayerTwo, scissors: this.gameChoicePlayerTwo}} choiceSelected={this.state.choicePlayerTwo}/>
                <div className="goButtonDiv">
                    <Button className="finalButton" bsSize="large" onClick={() => this.finalScore()}>GO</Button>
                </div>
                <div className="displayDiv">
                    <h1 className="titleWinner">{this.state.final}</h1>
                    <h4>Mario : {this.state.userScore}</h4>
                    <h4>Luigi : {this.state.computerScore}</h4>
                </div>                               
            </div>
        );
    };
};

export default Display;