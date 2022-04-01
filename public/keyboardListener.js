export default function keyboardListener(){
    function verifyKey(key){
        const acepptedKeys = ['ArrowUp', ' ', 'x']
        
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