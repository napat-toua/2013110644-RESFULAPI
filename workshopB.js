const users = [
    {   
        name: "napat", 
        nickname: "yuu", 
        hobby: "sleep", 
        address: "Thai", 
        province: {
            province: "Bangkok", 
            postcode: "10200"
        }
    },
    {   
        name: "tanarat", 
        nickname: "Q", 
        hobby: "gameing", 
        address: "Thai", 
        province: {
            province: "Bangkok", 
            postcode: "10201"
        }
    },
    {   
        name: "kittiphop", 
        nickname: "liean", 
        hobby: "sport", 
        address: "Thai", 
        province: {
            province: "Bangkok", 
            postcode: "10202"
        }
    }
]

for(const user of users){
    console.log(`"My nickname is ${user.name}, My hobby is ${user.hobby} and my post code is ${[user.province.postcode]}"`)
}