import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType = 'mana';
  private static _instanceCount = 0;

  constructor(name: string) {
    super(name);
    Mage._instanceCount += 1;
  }

  public static createdArchetypeInstances(): number {
    return this._instanceCount;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}
