import { Fireworks, useFireworks } from 'fireworks-js/dist/react'
import './Fireworks.css'
export default ({shuffleCards}) => {
    const { enabled, options, setEnabled, setOptions } = useFireworks({
        initialStart: true,
        initialOptions: {
          hue: {
            min: 0,
            max: 345
          },
          delay: {
            min: 15,
            max: 15
          },
          rocketsPoint: 50,
          speed: 10,
          acceleration: 1,
          friction: 0.96,
          gravity: 1,
          particles: 90,
          trace: 3,
          explosion: 6,
          autoresize: true,
          brightness: {
            min: 50,
            max: 80,
            decay: {
              min: 0.015,
              max: 0.03
            }
          },
          boundaries: {
            visible: false
          },
          sound: {
            enabled: true,
            files: [
              '/sounds/explosion0.mp3',
              '/sounds/explosion1.mp3',
              '/sounds/explosion2.mp3'
            ],
            volume: {
              min: 1,
              max: 10
            }
          },
        }
    });


  const divstyle = {
    top: '45%',
    left: '33%',
    fontSize: '5em',
    position: 'fixed',
    zIndex: '9999998',
  }

  const style = {
    top: '15%',
    left: '10%',
    width: '60%',
    height: '80%',
    position: 'fixed',
    zIndex: '9999999',
  }

  return (
        <Fireworks enabled={enabled} options={options} style={style} >
            <div style={divstyle}>
                Well Done
                <br />
                <button onClick={shuffleCards}>New Game</button>
            </div>
        </Fireworks>
    )
}