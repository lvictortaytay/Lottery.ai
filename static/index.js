console.log("hello")
const h1 = document.querySelector("h1")
const circleOne = document.querySelector(".circle")
const circleTwo = document.querySelector(".circle2")
const circleThree = document.querySelector(".circle3")
const circleFour = document.querySelector(".circle4")
const loginBtn = document.querySelector(".login")
const signUpBtn = document.querySelector(".SignUp")
const loginSignUpContainer = document.querySelector("container")
const page = document.querySelector("html")
const loginField = Array.from(document.getElementsByClassName("hidden"))
const signUpField = Array.from(document.getElementsByClassName("hidden2"))
const computerScreen = document.querySelector(".computerscreen")

console.log(loginSignUpContainer)
let toggle = true
// import { loginHtmlData } from "./htmlData"


let circleArr = [circleOne , circleTwo , circleThree , circleFour]

const colors = ["red", "blue" , "green" , "yellow" , "orange" ]
const pictureUrls = [
 "https://www.kslottery.com/images/megamillions_lrg.png" , 
 "https://www.mlive.com/resizer/n2GV_atuS4BHbYpk7Zi5w13yIns=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/WFOXLUNPMZHMRJ4SV2KQYPW7F4.jpg",
  "https://upload.wikimedia.org/wikipedia/en/thumb/8/89/New_York_Lottery.svg/1200px-New_York_Lottery.svg.png"]



const colorful = function(str , arr){


   setInterval(function(){
    let color = colors[Math.floor(Math.random() * colors.length)]
    // str.style.color = (`${color}`)
    let randInt = Math.floor(Math.random() * circleArr.length )
    arr[randInt].style.backgroundColor = (`${color}`)
    
   } , 800)



}

const computerScreenChanger = function(arr){
    setInterval(function(){
        let imgUrl = arr[Math.floor(Math.random() * arr.length)]
        computerScreen.setAttribute("src" , `${imgUrl}`)

        
    }, 1000)
    console.log("hello")

}


loginBtn.addEventListener("click" , function click(e){
    if(toggle){
        e.preventDefault()
    // const res = await axios.get("http://127.0.0.1:5000/login?")
    // page.innerHTML = res.data
    loginSignUpContainer.setAttribute("class" , "flex-container2")
    signUpBtn.setAttribute("class"  , "SignUp2")
    setTimeout(function(){
        for (field in loginField){
            loginField[field].setAttribute("class" , "showing")
        }
        const goback = document.querySelector("#goBackBtn")
        goback.setAttribute("class" , "showing")
        toggle = toggle === false? true : false
        
  
    } , 700)
    }
    else {
        return
    }
    
    
})


signUpBtn.addEventListener("click" , function click(e){
    if(toggle){
        e.preventDefault()
    // const res = await axios.get("http://127.0.0.1:5000/login?")
    // page.innerHTML = res.data
    loginSignUpContainer.setAttribute("class" , "flex-container2")
    loginBtn.setAttribute("class"  , "SignUp2")
    setTimeout(function(){
        for (field in signUpField){
            signUpField[field].setAttribute("class" , "showing")
        }
        const goback = document.querySelector("#goBackBtn")
        goback.setAttribute("class" , "showing")
        toggle = toggle === false? true : false
        
  
    } , 700)
    }
    else {
        return
    }
    
    
})



console.log(computerScreen)

// async function loadLoginForm (){
//     const res = await axios.get("http://127.0.0.1:5000/login?")
//     page.innerHTML = res.data
// }

// loadLoginForm()



colorful(h1 , circleArr)
computerScreenChanger(pictureUrls)



