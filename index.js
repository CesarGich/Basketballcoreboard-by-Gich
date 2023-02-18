let homeScore = document.getElementById("Home-score")
    totalPointsH = 0
    
let plusOneH = document.getElementById("hs-btn1")
let plusTwoH = document.getElementById("hs-btn2")
let plusThreeH = document.getElementById("hs-btn3")

    
let guestScore = document.getElementById("Guest-score")
    totalPointsG = 0
    
let plusOneG = document.getElementById("gs-btn1")
let plusTwoG = document.getElementById("gs-btn2")
let plusThreeG = document.getElementById("gs-btn3")


     

function onePointH() {
    totalPointsH += 1
    homeScore.textContent = totalPointsH
}

function twoPointsH() {
    totalPointsH += 2
    homeScore.textContent = totalPointsH
}

function threePointsH() {
    totalPointsH += 3
    homeScore.textContent = totalPointsH
}

function onePointG() {
    totalPointsG += 1
    guestScore.textContent = totalPointsG
}

function twoPointsG() {
    totalPointsG += 2
    guestScore.textContent = totalPointsG
}

function threePointsG() {
    totalPointsG += 3
    guestScore.textContent = totalPointsG
}