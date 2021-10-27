// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack(){
    return this.strength;
  }

  receiveDamage(damage){    
    this.health = this.health - damage;
  }

}

// Viking
class Viking extends Soldier {
  constructor (name, health, strength) {
    super (health, strength);
    this.name = name;
  }

  receiveDamage(damage){
    this.health = this.health - damage;
    if (this.health > 0){
      return `${this.name} has received ${damage} points of damage`; 
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry(){
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super (health, strength);
  }
  receiveDamage(damage){
    this.health = this.health - damage;
    if (this.health > 0){
      return `A Saxon has received ${damage} points of damage`; 
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(Viking){
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon){
    this.saxonArmy.push(Saxon);
  }
  

/* Ale, me podrías ayudar con este método, por fa? No le acabo de entender y obviamente no me sale tampoco... */
  vikingAttack(){ 
    let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
  
    if (this.saxonArmy.damage === this.vikingArmy.strength){
      return (this.saxonArmy.receiveDamage(this.vikingArmy.strength));
    }

    this.saxonArmy.health <= 0 {
    this.saxonArmy.shift(this.randomSaxon);
    }
  }
  
  saxonAttack(){}
  
  showStatus(){
    if (this.saxonArmy.length === 0){
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0){
      return "Saxons have fought for their lives and survived another day...";
    } else if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1){
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}