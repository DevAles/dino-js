export default function obstacle(obstacleElement){
    const obstacleAttributes = {
        speed: 1000,
        width: '25px',
        height: '30px',
        color: 'white',
        position: 'absolute',
        top: '270px',
        left: '480px',
        animation: `obstacle-movement 2000ms infinite linear`
    }

    function setCSS(){
        obstacleElement.style.width = obstacleAttributes.width
        obstacleElement.style.height = obstacleAttributes.height
        obstacleElement.style.backgroundColor = obstacleAttributes.color
        obstacleElement.style.position = obstacleAttributes.position
        obstacleElement.style.top = obstacleAttributes.top
        obstacleElement.style.left = obstacleAttributes.left
        obstacleElement.style.animation = obstacleAttributes.animation
    }

    function changeObstacleSpeed(){
        obstacleAttributes.speed = obstacleAttributes.speed - 0.01
        obstacleAttributes.animation = `obstacle-movement ${obstacleAttributes.speed}ms infinite linear`
        obstacleElement.style.animation = obstacleAttributes.animation
    }

    return {
        setCSS,
        changeObstacleSpeed
    }
}