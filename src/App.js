import React, { useState } from 'react'
import './App.css'

const App = () => {
  const initialArray = {
    array: [['', '', ''], ['', '', ''], ['', '', '']],
    isGameOn: true,
    turn: 'X'
  }
  const [state, setState] = useState(initialArray)

  const handleGameBtnClick = (x, y) => {
    if (state.isGameOn && state.array[x][y] === '') {
      if (state.turn === 'X') {
        setState({
          ...state,
          turn: 'O',
          array: [...state.array, state.array[x][y] = state.turn]
        })
      } else {
        setState({
          ...state,
          turn: 'X',
          array: [...state.array, state.array[x][y] = state.turn]
        })
      }
      console.log(state)

      checkWin()
    }
  }
  const checkWin = () => {
    if (state.array[0].every(val => val === 'X')
      || [state.array[1][0],state.array[1][1], state.array[1][2]].every(val => val === 'X')
      || [state.array[0][2],state.array[1][2],state.array[2][2]].every(val => val === 'X')
      || [state.array[2][0],state.array[2][1],state.array[2][2]].every(val => val === 'X')
      || [state.array[0][1], state.array[1][1], state.array[2][1]].every(val => val === 'X')
      || [state.array[0][0], state.array[1][1], state.array[2][2]].every(val => val === 'X')
      || [state.array[0][2], state.array[1][1], state.array[2][0]].every(val => val === 'X')
      || [state.array[0][0], state.array[1][0], state.array[2][0]].every(val => val === 'X')
    ) {
      setState({
        ...state,
        isGameOn: false
      })
      alert("X player won!")
    }
    else if (state.array[0].every(val => val === 'O'
      || [state.array[1][0],state.array[1][1], state.array[1][2]].every(val => val === 'O')
      || [state.array[0][2],state.array[1][2],state.array[2][2]].every(val => val === 'O')
      || [state.array[2][0],state.array[2][1],state.array[2][2]].every(val => val === 'O')
      || [state.array[0][1], state.array[1][1], state.array[2][1]].every(val => val === 'O')
      || [state.array[0][0], state.array[1][1], state.array[2][2]].every(val => val === 'O')
      || [state.array[0][2], state.array[1][1], state.array[2][0]].every(val => val === 'O')
      || [state.array[0][0], state.array[1][0], state.array[2][0]].every(val => val === 'O')
    ) ){
      setState({
        ...state,
        isGameOn: false
      })
      alert("O player won!")
    }
  }

  const reset = () => {
    setState(initialArray)
  }
  return (
    <div className="App">
      <hedaer><h1>Tic Tac Toe Game</h1></hedaer>
      <div className="content">
        <div>
          <div className="game-btn">
            <button
              onClick={() => {
                handleGameBtnClick(0, 0)
              }}>{state.array[0][0]}
            </button>
          </div>
          <div className="game-btn">
            <button
              onClick={() => {
                handleGameBtnClick(0, 1)
              }}>{state.array[0][1]}
            </button>
          </div>
          <div className="game-btn">
            <button
              onClick={() => {
                handleGameBtnClick(0, 2)
              }}>{state.array[0][2]}
            </button>
          </div>
        </div>
        <div>
          <div className="game-btn">
            <button
              onClick={() => {
                handleGameBtnClick(1, 0)
              }}>{state.array[1][0]}
            </button>
          </div>
          <div className="game-btn">
            <button
              onClick={() => {
                handleGameBtnClick(1, 1)
              }}>{state.array[1][1]}
            </button>
          </div>
          <div className="game-btn">
            <button
              onClick={() => {
                handleGameBtnClick(1, 2)
              }}>{state.array[1][2]}
            </button>
          </div>
        </div>
        <div>
          <div className="game-btn">
            <button
              onClick={() => {
                handleGameBtnClick(2, 0)
              }}>{state.array[2][0]}
            </button>
          </div>
          <div className="game-btn">
            <button
              onClick={() => {
                handleGameBtnClick(2, 1)
              }}>{state.array[2][1]}
            </button>
          </div>
          <div className="game-btn">
            <button
              onClick={() => {
                handleGameBtnClick(2, 2)
              }}>{state.array[2][2]}
            </button>
          </div>
        </div>
      </div>
      <button onClick={() => { reset() }} className="reset-btn">Reset</button>
    </div>
  )
}

export default App
