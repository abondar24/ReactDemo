import './App.css';
import React from 'react';
import ReactConfetti from 'react-confetti';
import Die from './components/Die'
import { nanoid } from "nanoid";

function App() {

  const [dice, setDice] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)

  React.useEffect(() => {
    const allHeld = dice.every(die => die.held)
    const firstValue = dice[0].value
    const allSameNumber = dice.every(die => die.value === firstValue)

    if (allHeld && allSameNumber) {
      setTenzies(true)
    }
  }, [dice])



  const diceElements = dice.map(die => (
    <Die
      key={die.id}
      value={die.value}
      held={die.held}
      holdDice={() => holdDice(die.id)}
    />
  ))


  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie())
    }

    return newDice
  }

  function rollDice() {
    if (!tenzies) {
      setDice((oldDice) =>
        oldDice.map(die => {
          return die.held ? die : generateNewDie()
        }))
    } else {
      setTenzies(false)
      setDice(allNewDice())
    }


  }

  function holdDice(id) {
    setDice(prevDice => prevDice.map(die => {
      return die.id === id ? { ...die, held: !die.held } : die
    }))
  }


  function randomDieValue() {
    return Math.ceil(Math.random() * 6)
  }

  function generateNewDie() {
    return {
      value: randomDieValue(),
      held: false,
      id: nanoid()
    }
  }


  return (
    <main>
      {tenzies && <ReactConfetti />}
      <h1>Tenzies</h1>
      <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="die-container">{diceElements}</div>
      <button className="roll-dice" onClick={rollDice}>
        {tenzies ? "Reset Game" : "Roll"}
      </button>
    </main>
  );
}

export default App;
