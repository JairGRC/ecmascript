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


let lorem=" sta es una frase para conseguir un proyecto \n" + "Otro frase"
// es6
let lorem2=`es otra frase
con salto de linea`
console.log(lorem)
console.log(lorem2)
// normal 
let person={
    'name':'jair',
    'age':22,
    'country':"Peru"
}
console.log(person.name,person.age,person.country)
// es6
let {name,age}=person
console.log(name,age)

let team1=['Jair','Julian', 'Ricardo']
let team2=['Valeria','Yesica','Camila']
let education= ['David',...team1,...team2]
console.log(education)

{
    var global = "Global Var"
}
{
    let globalLet='Global Let'
    console.log(globalLet)
}

console.log(global)



let isPositive=(number)=>number>=0
console.log(isPositive(10))


const suma=(a,b)=>a+b
const resultado = suma(6,1)
console.log(resultado)


// Promesas 

const p1= Promise.resolve(1)

console.log(p1)

p1
    .then(x=>x+5)
    .then(x=>Promise.resolve(x+5))
    .then(x=>Promise.reject('Error ! algo sucedio mal '))
    .then(x=>console.log("Esto no se va a llamar"))
    .catch(e=>console.log(e))

const delayed =x=>new Promise((resolve,reject)=>setTimeout(()=>resolve(x),900))

delayed(7)
    .then(x=>{
        console.log(x)

        return delayed(x+7)
    })
    .then(x=>console.log(x))
    .then(e=>Promise.reject("Hubo un error"))
    .catch(e=>console.log(e))

// 
    
require('isomorphic-fetch')
fetch('https://jsonplaceholder.typicode.com/users')
    .then(x=>x.json())
    .then(x=>console.log(x))


    