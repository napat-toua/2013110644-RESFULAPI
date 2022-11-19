//const datefns = require('date-fns')

//console.log(datefns.format(new Date(), "MM/dd/yyyy"))

//console.log("Hello World!");

//let firstName = "Napat"
//let age = 22

//console.log(firstName + age)

// let info = `
//     My name is ${firstName}
//     My age is ${age}
// `

// console.log(info)

let user = {
    name:"napat", 
    salary:500000,
    address:{
        province: "Bangkok", 
        postcode: 10200
    }
}

//console.log(user.address.province)

const showDate = () => `${user.name}`
//console.log(showDate())

const showMoreData = () => {
    let info = "My Name is "
    return `${info}${user.name}`
}

//console.log(showMoreData())

const sumNum = (a, b) => a+b
//console.log(sumNum(9, 71))

const {name, salary, address:{postcode}} = user

console.log(postcode)