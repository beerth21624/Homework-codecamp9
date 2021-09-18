1;
error

2;
name = John, ref = windown

3;
let calculator = {
    read() {
        this.num1 = +("number 1 :");
        this.num2 = +("number 2 :");
    },
    sum() {
        return this.num1 + this.num2;
    },
    mul() {
        return this.num1 * this.num2;
    }
};

4;
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function () {
        alert(this.step);
    }
};
