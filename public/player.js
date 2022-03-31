export default function player(playerElement){
    const playerAttributes = {
        width: '20px',
        height: '50px',
        color: 'red',
        position: 'relative',
        left: '10px',
        top: '250px',
        jumpTime: 500,
        isDead: false
    }

    const commands = {
        'ArrowUp': () => {
            console.log('ArrowUp')
            jump()
        },
        ' ': () => {
            jump()
        }
    }

    function setCSS(){
        playerElement.style.width = playerAttributes.width
        playerElement.style.height = playerAttributes.height
        playerElement.style.backgroundColor = playerAttributes.color
        playerElement.style.position = playerAttributes.position
        playerElement.style.left = playerAttributes.left
        playerElement.style.top = playerAttributes.top
    }

    function jump(){
        if(!playerElement.classList.contains('jumping')){
            playerElement.classList.add('jumping')
        } else {
            return;
        }

        setTimeout(() => {
            playerElement.classList.remove('jumping')
        }, playerAttributes.jumpTime)
    }

    return {
        playerAttributes,
        commands,
        setCSS
    }
}