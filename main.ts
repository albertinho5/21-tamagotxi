input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 5; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            . # # # #
            . # . # .
            `)
        basic.pause(50)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . #
            . # # # .
            . # . # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . # .
            . # # # .
            . # . # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . #
            . # # # .
            . # . # .
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . #
        . # # # .
        # . . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # # # .
        # . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        # # . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . . .
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # .
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . # #
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . . .
        . . # # #
        . # . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . # # # #
        . # . # .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . #
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        . . . # .
        . # # . .
        . . # . .
        . # # . .
        . . . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . #
        . # # # .
        . # . # .
        `)
})
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . #
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . # .
    . . . . #
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . # #
    . . # . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . # . . .
    . . # # #
    . # . . #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    # . . . .
    . # # # #
    . # . # .
    `)
basic.forever(function () {
	
})
