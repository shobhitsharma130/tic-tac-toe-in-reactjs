import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            chance: 'X',
            gameStatus: false,
            board: Array(9).fill(''),
            totalMoves: 1,
            winner: undefined,
            showResult: undefined
        }
    }
  handleClick(e){
      if(this.state.board[e.target.dataset.divnumber] === "" ){
          this.state.board[e.target.dataset.divnumber] = this.state.chance,
          e.target.innerText = this.state.chance,
          this.setState({
              chance: this.state.chance === 'X' ? 'O' : 'X',
              board: this.state.board,
              totalMoves: this.state.totalMoves+1
          })
      }
      let result = this.checkWinner();
      if(result === 'X'){
          this.setState({
            gameStatus: true,
            winner: 'X',
            showResult: 'Match won by X'
          });
      }
      else if(result === 'O'){
          this.setState({
            gameStatus: true,
            winner: 'O',
            showResult: 'Match won by O'
          });
      }
      else if(this.state.totalMoves === 9) {
        this.setState({
            gameStatus: true,
            winner: 'draw',
            showResult: 'Match is drawn'
        })
     }
  }
  checkWinner(){
      let moves = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
      let board = this.state.board;
      for( let i=0; i< moves.length; i++){
          if( board[moves[i][0]] === board[moves[i][1]] && board[moves[i][1]] === board[moves[i][2]] ){
            return board[moves[i][0]];
          }
      }
  }
  render() {
    return (
      <div className="container">
        <div className="headingContainer">
            <p className="heading">Tic Tac Toe</p>
            {this.state.showResult}
        </div>
        <div className="board" onClick={(e) => this.handleClick(e)}>
        <div className="division" data-divnumber="0"></div>
        <div className="division" data-divnumber="1"></div>
        <div className="division" data-divnumber="2"></div>
        <div className="division" data-divnumber="3"></div>
        <div className="division" data-divnumber="4"></div>
        <div className="division" data-divnumber="5"></div>
        <div className="division" data-divnumber="6"></div>
        <div className="division" data-divnumber="7"></div>
        <div className="division" data-divnumber="8"></div>
        </div>
      </div>
    );
  }
}

export default App;
