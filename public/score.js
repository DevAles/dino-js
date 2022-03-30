export default function score(scoreElement){
    const scoreAttributes = {
        score: 0
    }

    function updateScore(){
        scoreElement.innerHTML = parseInt(scoreAttributes.score)
    }

    function increment(){
        scoreAttributes.score = scoreAttributes.score + 0.01
        updateScore()
    }

    return {
        updateScore,
        increment
    }
}