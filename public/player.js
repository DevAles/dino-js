export default function player(playerElement){
    const playerAttributes = {
        width: '40px',
        height: '50px',
        color: 'white',
        position: 'relative',
        left: '10px',
        top: '250px',
        jumpTime: 400,
        attackTime: 600,
        isDead: false,
        energy: true,
        recoveryTime: 5000
    }

    const commands = {
        'ArrowUp': () => {
            console.log('ArrowUp')
            jump()
        },
        ' ': () => {
            jump()
        },
        'x': (energyBallElement) => {
            if(energyBallElement.style.display === 'none' && !playerAttributes.isDead && playerAttributes.energy === true){
                attack(energyBallElement)
                return 'attack'
            }
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

    function attack(energyBallElement){
        setTimeout(() => {
            if(!playerElement.classList.contains('attacking')){
                playerElement.classList.add('attacking')
                energyBallElement.style.display = 'block'
                playerAttributes.energy = false
            } else {
                return;
            }

            setTimeout(() => {
                playerElement.classList.remove('attacking')
                energyBallElement.style.display = 'none'
            }, playerAttributes.attackTime)

            setTimeout(() => {
                playerAttributes.energy = true
            }, playerAttributes.recoveryTime)
        }, 100)
    }
    
    return {
        playerAttributes,
        commands,
        setCSS
    }
}