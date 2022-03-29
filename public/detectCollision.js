export default function detectCollision(player, enemy){
    const enemyPosition = enemy.getBoundingClientRect()
    const playerPosition = player.getBoundingClientRect()

    if(enemyPosition.top < playerPosition.bottom && enemyPosition.bottom > playerPosition.top && enemyPosition.left < playerPosition.right && enemyPosition.right > playerPosition.left){
        return true
    }
}