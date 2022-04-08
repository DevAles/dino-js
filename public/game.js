import player from './player.js'
import obstacle from './obstacle.js'
import score from './score.js'
import keyboardListener from './keyboardListener.js'

const playerVar = player()
const obstacleVar = obstacle()
const scoreVar = score()
const keyboardListenerVar = keyboardListener()

let recoveryTime = playerVar.playerAttributes.recoveryTime;

export default function game(){

    function start(startScreen, playerElement, obstacleElement, scoreElement,
        showRecoveryTimeElement){

        startScreen.remove();

        playerVar.setCSS(playerElement);
        obstacleVar.setCSS(obstacleElement);

        playerElement.style.display = 'block';
        obstacleElement.style.display = 'block';
        scoreElement.style.display = 'block';
        showRecoveryTimeElement.style.display = 'block';
        
        scoreVar.change(playerElement, obstacleElement, scoreElement);
    }

    function detectCollision(firstObject, secondObject){
        const firstObjectPosition = firstObject.getBoundingClientRect()
        const secondObjectPosition = secondObject.getBoundingClientRect()
    
        if(secondObjectPosition.top < firstObjectPosition.bottom && secondObjectPosition.bottom > firstObjectPosition.top && secondObjectPosition.left < firstObjectPosition.right && secondObjectPosition.right > firstObjectPosition.left){
            return true
        }
    }

    function verifyGameOver(playerElement, obstacleElement, energyBallElement){
        const collisionPlayerAndObstacle = detectCollision(playerElement, obstacleElement);
        
        if(collisionPlayerAndObstacle){
            playerVar.playerAttributes.isDead = true;
            obstacleElement.remove();
            energyBallElement.remove();
            
            if (playerElement.classList.contains('jumping')){
                playerElement.classList.remove('jumping')
            }

            window.alert('Game Over');
            window.location.reload();
        }
    }

    function verifyObstacleDestroyed(energyBallElement, obstacleElement, scoreElement){
        const collisionObstacleAndEnergyBall = detectCollision(energyBallElement, obstacleElement);

            if(collisionObstacleAndEnergyBall) {
                obstacleElement.style.display = 'none'; 
                scoreVar.increment(scoreElement);

                setInterval(() => {
                    obstacleElement.style.display = 'block';
                }, 100);
            }
    }

    function verifyKey(key, energyBallElement, showRecoveryTimeElement, playerElement){
        const keyValid = keyboardListenerVar.verifyKey(key);
            
        if (keyValid && playerVar.playerAttributes.isDead == false){
            const commandFunction = playerVar.commands[key];
        
            const returnCommmand = commandFunction(playerElement, energyBallElement);

            if (returnCommmand == 'attack'){
                recoveryTime = playerVar.playerAttributes.recoveryTime;
                
                const recoveryInterval = setInterval(() => {
                    if (recoveryTime > 0){
                        recoveryTime = recoveryTime - 100;
                        showRecoveryTimeElement.innerHTML = recoveryTime;
                    } else {
                        showRecoveryTimeElement.innerHTML = 0;
                        clearInterval(recoveryInterval);
                    }
                }, 100);                 
            }
        }
    }
    return {
        start,
        detectCollision,
        verifyGameOver,
        verifyObstacleDestroyed,
        verifyKey
    }
}