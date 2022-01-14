const ATTACK_VAL = 10;
const STRONG_ATTACK_VAL = 12;
const MONSTER_ATTACK_VAL = 14;
const HEAL_VAL = 10;

let maxMonsterLife = 100;

let maxPlayerLife = 100;
let currentMonsterLife = maxMonsterLife;
let currentPlayerLife = maxPlayerLife;

adjustHealthBars(maxMonsterLife, maxPlayerLife);

function getInput() {
    const enteredValue = parseInt(prompt("Life of monster:", "100"));
    if (!isNaN(enteredValue) && enteredValue) {
        maxMonsterLife = enteredValue;
    } else if (isNaN(enteredValue)) {
        throw { message: "Not a number input." };
    }
}

function endRound() {
    const damagePlayer = dealPlayerDamage(MONSTER_ATTACK_VAL);
    currentPlayerLife -= damagePlayer;
    if (currentMonsterLife <= 0 && currentPlayerLife > 0) {
        alert("You won!");
    } else if (currentPlayerLife <= 0) {
        alert("You lost!");
    } else {
    }
}

function attackMonster(attackValue) {
    const damageMonster = dealMonsterDamage(attackValue);
    currentMonsterLife -= damageMonster;
}

function attackHandler() {
    attackMonster(ATTACK_VAL);
    endRound();
}

function strongAttackHandler() {
    attackMonster(STRONG_ATTACK_VAL);
    endRound();
}

function healPlayerHandler() {
    currentPlayerLife += HEAL_VAL;
    increasePlayerHealth(HEAL_VAL);
    endRound();
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);
getInput();
