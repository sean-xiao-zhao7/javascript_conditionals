let maxMonsterLife = 100;
let maxPlayerLife = 100;
let currentMonsterLife = maxMonsterLife;
let currentPlayerLife = maxPlayerLife;
const ATTACK_VAL = 10;

adjustHealthBars(maxMonsterLife);

function attackHandler() {
    const damageDealt = dealMonsterDamage(ATTACK_VAL);
    currentMonsterLife -= damageDealt;
}

attackBtn.addEventListener("click", attackHandler);
