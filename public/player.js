export default function player(){
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
        'ArrowUp': (playerElement) => {
            console.log('ArrowUp')
            jump(playerElement)
        },
        ' ': (playerElement) => {
            jump(playerElement)
        },
        'x': (playerElement, energyBallElement) => {
            if(energyBallElement.style.display === 'none' && !playerAttributes.isDead && playerAttributes.energy === true){
                attack(playerElement, energyBallElement)
                return 'attack'
            }
        }
    }

    function setCSS(playerElement){
        playerElement.style.width = playerAttributes.width
        playerElement.style.height = playerAttributes.height
        playerElement.style.backgroundColor = playerAttributes.color
        playerElement.style.position = playerAttributes.position
        playerElement.style.left = playerAttributes.left
        playerElement.style.top = playerAttributes.top
    }

    function jump(playerElement){
        if(!playerElement.classList.contains('jumping')){
            playerElement.classList.add('jumping')
        } else {
            return;
        }

        setTimeout(() => {
            playerElement.classList.remove('jumping')
        }, playerAttributes.jumpTime)
    }

    function attack(playerElement, energyBallElement){
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
    
    function verifyRecoveryTime(){
        if (recoveryTime > 0){
            recoveryTime = recoveryTime - 100;
            showRecoveryTimeElement.innerHTML = recoveryTime;
        } else {
            showRecoveryTimeElement.innerHTML = 0;
            clearInterval(recoveryInterval);
        }
    }

    return {
        playerAttributes,
        commands,
        setCSS,
        verifyRecoveryTime
    }
}