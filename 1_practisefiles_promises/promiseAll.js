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

// Promise.all implementation 

Promise.all([cleanRoom(), removeGarbage(), winIcecream()]).then(function(){
    console.log('all finished');
});

//Promise.race implementation

Promise.race([cleanRoom(), removeGarbage(), winIcecream()]).then(function(){
    console.log('one of them finished');
});