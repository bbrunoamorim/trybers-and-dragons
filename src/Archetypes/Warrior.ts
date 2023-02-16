import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static _instanceCount = 0;

  constructor(name: string) {
    super(name);
    Warrior._instanceCount += 1;
  }

  public static createdArchetypeInstances(): number {
    return this._instanceCount;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}
