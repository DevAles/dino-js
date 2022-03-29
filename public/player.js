export default function player(playerElement){
    const playerAttributes = {
        width: '20px',
        height: '50px',
        color: 'red',
        position: 'relative',
        left: '10px',
        top: '250px',
        jumpTime: 500
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

    function setPlayerAttributes(newPlayerAttributes){
        playerAttributes.width = newPlayerAttributes.width || playerAttributes.width
        playerAttributes.height = newPlayerAttributes.height || playerAttributes.height
        playerAttributes.color = newPlayerAttributes.color || playerAttributes.color
        playerAttributes.position = newPlayerAttributes.position || playerAttributes.position
        playerAttributes.left = newPlayerAttributes.left || playerAttributes.left
        playerAttributes.top = newPlayerAttributes.top || playerAttributes.top
        playerAttributes.jumpTime = newPlayerAttributes.jumpTime || playerAttributes.jumpTime
    } //tmp

    function setCSS(){
        playerElement.style.width = playerAttributes.width
        playerElement.style.height = playerAttributes.height
        playerElement.style.backgroundColor = playerAttributes.color
        playerElement.style.position = playerAttributes.position
        playerElement.style.left = playerAttributes.left
        playerElement.style.top = playerAttributes.top
    } //tmp

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
        commands,
        setPlayerAttributes,
        setCSS
    }
}