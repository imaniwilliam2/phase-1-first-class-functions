function receivesAFunction(callback){
    return callback()
}
function returnsANamedFunction(){
    function namedFunction(){
        return receivesAFunction
    }
    return namedFunction()
}
function returnsAnAnonymousFunction(){
     return function()  {
        return receivesAFunction()
    }
}