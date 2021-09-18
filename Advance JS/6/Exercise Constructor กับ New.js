1;
function Calculator() {
    this.read = function () {
        this.num1 = +("number 1 :")
        this.num2 = +("number 2 :")
    }
    this.sum = function () {
        return this.num1 + this.num2;
    }
    this.mul = function () {
        return this.num1 * this.num2;
    }
};

2;
function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
        let temp = +("value :")
        this.value += temp;
    }
}