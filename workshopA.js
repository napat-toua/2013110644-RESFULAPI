const user = {
    name: "napat", 
    nickname: "yuu", 
    hobby: "sleep", 
    address: "Thai/?", 
    province: {
        province: "Bangkok", 
        postcode: "10200"
    }
}

const {name, nickname, hobby, address, province:{postcode}} = user

const presentData = () => `"My name is ${nickname}, My hobby is ${hobby} and my postcode is ${postcode}`

console.log(presentData())