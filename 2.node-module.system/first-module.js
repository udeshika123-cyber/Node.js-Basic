function add (a,b){
    return a+b
}
function substract (a,b){
    return a-b
}

function devide(a,b){
    if (a==b){
        throw new Error('Devide by zero is not allowed')
    }
    return a/b
}
export default {
    add,substract,devide
};