function data () {
    return [1,2,3] // [1,2,3,4,5]

};

var tmp= data()
var first = tmp[0]
var second = tmp [1];
var third = tmp[2];
var fourth = tmp.slice(3) // 4,5

function dataDescructring() {
    return [1,2,3] // [1,2,3,4,5]
};

var [
    first,
    second, // = 10 : override the value
    third,
    // ...fourth // 4,5  // if no value sends empty array
] 
// = tmp =  // if you like to give a var as above

= data()


//comman descruturing
// if you do not need the second value from the array 
var [
    first,
    , //comma descruturing
    third
] = data()

// parameter arrays

function data ([
    first,
    second,
    third
]) {
    // your code
}