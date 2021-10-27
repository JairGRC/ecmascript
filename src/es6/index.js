function newFunction(name,age,country){
    var name=name || 'jair';
    var age = age || 22
    var country = country || "Peru"
    console.log(name,age,country)
}

//es 6 
function newFunction2(name='jair',age=22,country="Peru"){
    console.log(name,age,country)
}

newFunction2()
newFunction2('Jair','21','PE')

let hello="Hello"
let world= "world"
let epicPhrase= hello + ' '+ world
console.log(epicPhrase);
let epicPhrase2=`${hello} ${world}`;
console.log(epicPhrase2)


let lorem=""