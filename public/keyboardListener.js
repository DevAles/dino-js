export default function keyboardListener(){
    function verifyKey(key){
        const acepptedKeys = ['ArrowUp', ' ']
        
        if(acepptedKeys.includes(key)){
            return true
        } else {
            return false
        }
    }

    return{
        verifyKey
    }
}