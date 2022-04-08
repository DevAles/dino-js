import game from './game.js';
import obstacle from './obstacle.js';

const gameVar = game()
const obstacleVar = obstacle()

export default function score(){
    const scoreAttributes = {
        score: 0
    }

    function updateScore(scoreElement){
        scoreElement.innerHTML = parseInt(scoreAttributes.score)
    }

    function increment(scoreElement){
        scoreAttributes.score = scoreAttributes.score + 0.01
        updateScore(scoreElement)
    }

    function change(playerElement, obstacleElement, scoreElement){
        setInterval(() => {
            if(!gameVar.detectCollision(playerElement, obstacleElement)) {
                obstacleVar.changeObstacleSpeed(obstacleElement);
                increment(scoreElement);
            }
        }, obstacleVar.obstacleSpeed);
    }

    return {
        increment,
        change
    }
}