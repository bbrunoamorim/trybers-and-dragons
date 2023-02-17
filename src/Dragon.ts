import Monster from './Monster';

export default class Dragon extends Monster {
  protected _lifePoints: number;

  constructor(lifepoints = 999) {
    super(lifepoints);
    this._lifePoints = lifepoints;
  }
}
