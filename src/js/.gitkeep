export default class Team {
  constructor() {
    this.members = [{
      name: 'Mr Bow',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },
    {
      name: 'Mr Sword',
      type: 'Swordsman',
      health: 100,
      level: 2,
      attack: 40,
      defence: 10,
    },
    {
      name: 'Mr Mage',
      type: 'Magician',
      health: 90,
      level: 1,
      attack: 10,
      defence: 40,
    },
    {
      name: 'Mr Ghoul',
      type: 'Undead',
      health: 50,
      level: 3,
      attack: 100,
      defence: 80,
    },
    {
      name: 'Zomb',
      type: 'Zombie',
      health: 20,
      level: 1,
      attack: 10,
      defence: 10,
    },
    {
      name: 'Demon',
      type: 'Daemon',
      health: 80,
      level: 2,
      attack: 80,
      defence: 20,
    }];
  }
  * [Symbol.iterator]() {
    let current = 0;
    const last = this.members.length;
    const persons = this.members;
    
    for (let i = current; i < last; i++) {
      yield persons[current];
      current += 1;
    }
  }
}