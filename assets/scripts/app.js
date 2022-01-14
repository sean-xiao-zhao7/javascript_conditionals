let maxMonsterLife = 100;
let maxPlayerLife = 100;
let currentMonsterLife = maxMonsterLife;
let currentPlayerLife = maxPlayerLife;

const ATTACK_VAL = 10;
const MONSTER_ATTACK_VAL = 14;

adjustHealthBars(maxMonsterLife);

function attackHandler() {
    const damageMonster = dealMonsterDamage(ATTACK_VAL);
    currentMonsterLife -= damageMonster;
    const damagePlayer = dealPlayerDamage(MONSTER_ATTACK_VAL);
    currentPlayerLife -= damagePlayer;
    if (currentMonsterLife <= 0 && currentPlayerLife > 0) {
        alert("You won!");
    } else if (currentPlayerLife <= 0) {
        alert("You lost!");
    } else {
    }
}

attackBtn.addEventListener("click", attackHandler);
