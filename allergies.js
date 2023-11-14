const ALLERGENS = {
  1: 'eggs',
  2: 'peanuts',
  4: 'shellfish',
  8: 'strawberries',
  16: 'tomatoes',
  32: 'chocolate',
  64: 'pollen',
  128: 'cats',
}

export class Allergies {
  constructor(score) {
    this.score = score;
  }

  list() {
    throw new Error('Remove this statement and implement this function');
  }

  allergicTo(allergen) {
    return false;
  }
}
