export const abilityModifier = (constitution) => {
  if (constitution < 3) throw new Error("Ability scores must be at least 3");
  if (constitution > 18) throw new Error("Ability scores can be at most 18");
  return Math.floor((constitution - 10) / 2);
};
export class Character {
  constructor() {
    this._strength = Character.rollAbility();
    this._dexterity = Character.rollAbility();
    this._constitution = Character.rollAbility();
    this._intelligence = Character.rollAbility();
    this._wisdom = Character.rollAbility();
    this._charisma = Character.rollAbility();
  }
  static rollAbility() {
    let dices = Array.from(
      { length: 4 },
      () => Math.floor(Math.random() * 6) + 1
    ).sort((a, b) => a - b);
    return dices.slice(1).reduce((sum, current) => sum + current);
  }
  get strength() {
    return this._strength;
  }
  get dexterity() {
    return this._dexterity;
  }
  get constitution() {
    return this._constitution;
  }
  get intelligence() {
    return this._intelligence;
  }
  get wisdom() {
    return this._wisdom;
  }
  get charisma() {
    return this._charisma;
  }
  get hitpoints() {
    return 10 + abilityModifier(this._constitution);
  }
}
