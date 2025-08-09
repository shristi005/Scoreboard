let scoreHome=document.getElementById("score-home")
let scoreGuest=document.getElementById("score-guest")

let homeCount=0;
let guestCount=0;
function add1tohome(){
    homeCount+=1
    scoreHome.textContent=homeCount
}
function add2tohome(){
    homeCount+=2
    scoreHome.textContent=homeCount
}
function add3tohome(){
    homeCount+=3
    scoreHome.textContent=homeCount
}
function add1toguest(){
    guestCount+=1
    scoreGuest.textContent=guestCount
}
function add2toguest(){
    guestCount+=2
    scoreGuest.textContent=guestCount
}
function add3toguest(){
    guestCount+=3
    scoreGuest.textContent=guestCount
}