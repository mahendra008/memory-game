import { useEffect, useState } from 'react'
import './App.css';

//-- components
import SingleCard from './SingleCard/SingleCard'

const cardImages = [
  {"src": "/img/helmet-1.png", matched: false},
  {"src": "/img/potion-1.png", matched: false},
  {"src": "/img/ring-1.png", matched: false},
  {"src": "/img/scroll-1.png", matched: false},
  {"src": "/img/shield-1.png", matched: false},
  {"src": "/img/sword-1.png", matched: false}
]

function App() {
  const [ cards, setCards ] = useState([]);
  const [turns, setTurns ] = useState(0);
  const [ choiceOne, setChoiceOne ] = useState(null);
  const [ choiceTwo, setChoiceTwo ] = useState(null);
  const [disabled, setDisabled ] = useState(false);

  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
    .sort( () => Math.random() - 0.5)
    .map( (card) => ({...card, id: Math.random()}));

    setCards(shuffleCards);
    setTurns(0);
  }

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }

  const resetTurn = () =>{
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurn => prevTurn + 1);
    setDisabled(false);
  }

  useEffect(() => {
    if(choiceOne && choiceTwo){
      setDisabled(true);
      if(choiceOne.src === choiceTwo.src){
        setCards((prevCards) => {
          return prevCards.map(card => {
            if(card.src === choiceOne.src){
              return {...card, matched: true}
            }else{
              return card;
            }
          })
        })
        resetTurn();
      }else{
        setTimeout(() => {
          resetTurn();
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo])

  if(cards.length === 0){
    shuffleCards();
  }

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
        <div className='card-grid'>
          {cards.map(card => (
              <SingleCard 
                card={card} 
                key={card.id} 
                handleChoice = {handleChoice} 
                flipped = {card === choiceOne || card === choiceTwo || card.matched}
                disabled={disabled}
              />
          ))}
      </div>
      <h2>{`Turns: ${turns}`}</h2>
    </div>
  );
}

export default App;
