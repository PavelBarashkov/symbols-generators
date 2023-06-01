/* eslint-disable no-plusplus */
export default class Team {
  constructor(Character) {
    this.Character = Character;
  }

  * [Symbol.iterator]() {
    let index = 0;

    while (index < this.Character.length) {
      yield this.Character[index];
      index++;
    }
  }
}
