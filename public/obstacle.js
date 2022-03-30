export default function obstacle(obstacleElement){
    const obstacleAttributes = {
        width: '20px',
        height: '20px',
        color: 'blue',
        position: 'relative',
        top: '230px',
        left: '480px',
        animation: 'obstacle-movement 1s infinite linear'
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

    return {
        setCSS
    }
}