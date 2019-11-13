class Unit {
  constructor(name) {
   this.name = name
   this.hp = 100
   this.atk = 10
   this.mag = 5
   this.job = "Squire"
   this.alive = true
  }
  attack(target) {
    if {!target.alive} return `${target.name} has already fallen!`
    target.hp -= this.atk
    if (target.hp <= 0) {
      target.alive = false
      return `${target.name} has fallen!`
    }
    return `${this.name} attacked $[target.name]`
  }
}

class Squire extends Unit {
  constructor(name) {
    super(name)
  }
}


class Knight extends Unit {
  constructor(name) {
    super(name)
    this.atk += 10
    this.job = 'Knight'
  }
}

class Mage extends Unit {
  constructor(name) {
    super(name)
    this.hp -= 25
    this.mag += 25
    this.attack -= 30
    this.job = 'Mage'
  }

    castSpell(target) {
      if (!target.alive) return `${target.name} has already fallen` target.hp -= this.mag
      if (target.hp <= 0) {
        target.alive = false
        return `${target.name} has fallen!`
    }
}




let knight = new Knight('tiffany')
let squire = new Squire('Ness')
