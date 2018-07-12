let promisetoCleanTheroom = new Promise(function(resolve, reject){
    // cleaning the room
    let isClean = false;
    if(isClean){
        resolve('Room Cleaning Resolved');
    }else{
        reject('Room is still untidy');
    }
});

promisetoCleanTheroom.then(function(fromResolve){
    console.log(fromResolve);
}).catch(function(fromReject){
    console.log(fromReject);
})

// then runs on successful resolve 
// catch runs on reject