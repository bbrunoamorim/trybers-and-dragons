import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private character: Fighter,
    private monsters: Fighter[] | SimpleFighter[],
  ) {
    super(character);
  }

  private fighting() {
    while (
      this.character.lifePoints !== -1
      && this.monsters.every((monster) => monster.lifePoints !== -1)
    ) {
      this.monsters.forEach((monster) => this.character.attack(monster));
      this.monsters.forEach((monster) => monster.attack(this.character));
    }
  }

  fight(): number {
    this.fighting();
    return super.fight();
  }
}
