class GuessingGame {
    min;
    max;
    value;
    constructor() { }

    setRange(min, max) {
      this.min = min;
      this.max = max;
    }

    guess() {
        this.value = Math.round((this.min + this.max) / 2);
        return this.value;
       
    }

    lower() {
        this.max = this.value;
        this.guess();
    }

    greater() {
        this.min = this.value;
        this.guess();
    }
}

module.exports = GuessingGame;
