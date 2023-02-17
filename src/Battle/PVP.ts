import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(private playerOne: Fighter, private playerTwo: Fighter) {
    super(playerOne);
  }

  private fighting() {
    while (this.playerOne.lifePoints !== -1
      && this.playerTwo.lifePoints !== -1) {
      this.playerOne.attack(this.playerTwo);
      this.playerTwo.attack(this.playerOne);
    }
  }

  public fight(): number {
    this.fighting();
    return super.fight();
  }
}
