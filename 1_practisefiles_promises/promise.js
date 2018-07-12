let cleanRoom = function(){
    return new Promise(function(resolve, reject){
        resolve('cleaned the room \n');
    })
}

let removeGarbage = function(message){
    return new Promise(function(resolve, reject){
        resolve(message + 'Removed the garbage \n');
    })
}

let winIcecream = function(message){
    return new Promise(function(resolve, reject){
        resolve(message + 'won the Ice Cream \n');
    })
}

cleanRoom().then(function(cleanRoomMessage){
    return removeGarbage(cleanRoomMessage);
}).then(function(removeGarbageMessage){
    return winIcecream(removeGarbageMessage);
}).then(function(wonIceCreamMessage){
    console.log('All Promises Done \n'+ wonIceCreamMessage);
})