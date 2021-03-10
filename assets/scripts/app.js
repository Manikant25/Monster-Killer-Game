const ATTACK_VALUE =10
const MONSTER_ATTACK_VALUE =14
const STRONG_ATTACK_VALUE=17
const HEAL_VALUE=20
let chosenMaxLife=100

let currentMonsterHealth = chosenMaxLife
let currentPlayerHealth = chosenMaxLife
adjustHealthBars(chosenMaxLife)

function 

function attackHandler(){
 const damage= dealMonsterDamage(ATTACK_VALUE)
 currentMonsterHealth-=damage
 const playerDamge = dealPlayerDamage(MONSTER_ATTACK_VALUE);
currentPlayerHealth-=playerDamge
 if(currentMonsterHealth<=0 && currentPlayerHealth>0){
 alert("You WON!!")
 } else if(currentPlayerHealth<=0 && currentMonsterHealth>0){
     alert("You lost!")
 } else if(currentMonsterHealth<=0 && currentPlayerHealth<=0)
 {
     alert("Draw")
 }
}

function stringAttackHandler(){
    const damage= dealMonsterDamage(STRONG_ATTACK_VALUE)
 currentMonsterHealth-=damage
 const playerDamge = dealPlayerDamage(MONSTER_ATTACK_VALUE);
currentPlayerHealth-=playerDamge
 if(currentMonsterHealth<=0 && currentPlayerHealth>0){
 alert("You WON!!")
 } else if(currentPlayerHealth<=0 && currentMonsterHealth>0){
     alert("You lost!")
 } else if(currentMonsterHealth<=0 && currentPlayerHealth<=0)
 {
     alert("Draw")
 }

}

function healPlayerHandler(){
 increasePlayerHealth(HEAL_VALUE);

}


strongAttackBtn.addEventListener("click",stringAttackHandler)
attackBtn.addEventListener("click",attackHandler)