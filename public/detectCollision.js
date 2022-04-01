export default function detectCollision(firstObject, secondObject){
    const firstObjectPosition = secondObject.getBoundingClientRect()
    const secondObjectPosition = firstObject.getBoundingClientRect()

    if(secondObjectPosition.top < firstObjectPosition.bottom && secondObjectPosition.bottom > firstObjectPosition.top && secondObjectPosition.left < firstObjectPosition.right && secondObjectPosition.right > firstObjectPosition.left){
        return true
    }
}