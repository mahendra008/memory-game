import react from 'react'
import './SingleCard.css'
export default ({ card, handleChoice, flipped, disabled }) =>{

    const handleClick = () => {
        if(!disabled){
            handleChoice(card);
        }
    }

    return(
        <div className='card'>
        <div className={flipped ? 'flipped' : ''}>
            <img src={card.src} alt='card front' className='front'/>
            <img src='/img/cover.png' alt='card back' className='back' onClick={ handleClick } />
        </div>
        </div>
    )
}