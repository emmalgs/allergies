const ALLERGENS = {
  1: "eggs",
  2: "peanuts",
  4: "shellfish",
  8: "strawberries",
  16: "tomatoes",
  32: "chocolate",
  64: "pollen",
  128: "cats",
};

export class Allergies {
  constructor(score) {
    this.score = score;
    this.allergens = [];
  }

  list() {
    if (this.score > 255) {
      this.score = this.score -= 256;
    }
    let allergenScore = this.score;
    let allergenKeys = Object.keys(ALLERGENS).reverse();
    for (let i = 0; i < allergenKeys.length; i++) {
      if (allergenScore >= allergenKeys[i]) {
        this.allergens.unshift(ALLERGENS[allergenKeys[i]]);
        allergenScore -= allergenKeys[i];
      }
    }
    return this.allergens;
  }

  allergicTo(allergen) {
    return this.list().includes(allergen);
  }
}
