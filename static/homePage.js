const body = document.querySelector("body")
const countriesBtn = document.querySelector(".country")
const countrySelection = document.querySelector(".dropdown-content2")
const game = document.querySelector(".game")
const gameSelection = document.querySelector(".gameDropDown-content")
const config = { 
    headers:{
        'X-FunGenerators-Api-Secret' : `k0RyfVyNEf4wRPFMfvm5jQeF`
    }
}

const config2 = {
    headers:{
        'X-FunGenerators-Api-Secret' : `k0RyfVyNEf4wRPFMfvm5jQeF`
    },
    params:{
        country:"USA"
    }
}

const countries = []
const supported = []
const getData = async function(url){
    console.log("hello1")
    const res = await axios.get(`${url}` , config)
    const countryList = res.data.contents.countries
    for(country in countryList){
        countries.push(`${countryList[country]}`)
    }

}
const api = (`https://api.fungenerators.com/lottery/countries`)
 

countriesBtn.addEventListener("mouseover" , function(e){
    countrySelection.innerHTML = ""
    for(country in countries){
        let element = document.createElement("a")
        element.innerHTML = `<a href = "#" class = "countries"> ${countries[country]}</a>`
        console.log("element")
        countrySelection.append(element)
    }
    // popStates(countries)
    console.log(countrySelection)
})
// countriesBtn.addEventListener("mouseleave" , function(e){
//     e.preventDefault()
//     countrySelection.innerHTML = ""
// })

// countryLink.addEventListener("click" , function(e){
//     console.log(e)
// })

getData(api)
const supportedUrl = `https://api.fungenerators.com/lottery/supported`

const getSupported = async function(url , conf){
    let supported2 = await axios.get(`${url}` , conf)
    let res = (supported2.data.contents.games)
    for(let i = 0 ; i < res.length ; i ++){
        supported.push(supported2.data.contents.games[i]["name"])
    }
    
    console.log(supportedx)
}
// getSupported(supportedUrl, config2)
// console.log(`supported: ${supportedGames}`)

// supported.push(supportedGames)

game.addEventListener("mouseover" , async function(e){
    gameSelection.innerHTML = ""
    getSupported(supportedUrl, config2)
    // console.log(supported2)
    for(gameName in supported){
        let element = document.createElement("a")
        element.innerHTML = `<a href = "#"> ${supported[gameName]}</a>`
        gameSelection.append(element)
    }

    // popStates(countries)
    // console.log(gameSelection)
})


// let = popStates = function(countries){
//     for(country in countries){
//     let element = document.createElement("a")
//     element.innerHTML = `<a href = "#" class = "countries"> ${countries[country]}</a>`
//     countrySelection.append(element)
// }
// }



