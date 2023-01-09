input.onButtonPressed(Button.A, function () {
    Num += 1
})
input.onButtonPressed(Button.AB, function () {
    if (Num % 2 == 0) {
        basic.showString("Even")
    }
    if (Num % 2 == 1) {
        basic.showString("Odd")
    }
})
input.onButtonPressed(Button.B, function () {
    Num += -1
})
let Num = 0
Num = 0
basic.forever(function () {
    basic.showNumber(Num)
})
